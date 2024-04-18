import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from 'hono';
import { Jwt } from "hono/utils/jwt";
import { signinSchema, signupSchema } from "../zod/userSchema";

export async function signup(c:Context){
    
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{
        const body :{
            username:string;
            password : string;
            email : string;
        } =await c.req.json();
    
        const parsedUser = signupSchema.safeParse(body);
        
        if(!parsedUser.success){
            return c.body(`Invalid data sent`,500);
        }
        
        const isExist =await prisma.user.findFirst({
            where:{
                OR:[
                    {username : body.username.toLowerCase()},
                    {email : body.email.toLowerCase()}
                ]
            }
        })
        
        if(isExist){
            return c.body(`User already exists `,400);
        }
        
        //later - hashpassword
        
        
        const response = await prisma.user.create({
            data:{
                username:body.username.toLowerCase(),
                email:body.email.toLowerCase(),
                password:body.password
            }
        });
        
        const token =await Jwt.sign(body.username,c.env.JWT_TOKEN);
        return c.json({
            msg:"user successfully created",
            token:token  
        });

    }catch(err){
        return c.body(`Internal server error : ${err}`,500);
    }
    finally{
        await prisma.$disconnect();
    }
}

export async function signin(c:Context){

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const body :{
            username:string;
            password : string;
        } =await c.req.json();
    
        const parsedUser = signinSchema.safeParse(body);
    
        if(!parsedUser.success){
            return c.body(`Invalid data sent`,500);
        }

        const isExist =await prisma.user.findFirst({
            where:{
                username : body.username.toLowerCase(),
                password : body.password
            }
        })

        if(!isExist){
            return c.body(`User Doesnot exist `,400);
        }

        const token =await Jwt.sign(body.username,c.env.JWT_TOKEN);
        return c.json({
            msg:"login successfull",
            token:token  
        });
        
    }catch(err){
        return c.body(`Internal server error : ${err}`,500);
    }
    finally{
        await prisma.$disconnect();
    }
}
