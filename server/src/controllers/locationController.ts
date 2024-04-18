import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {Context} from 'hono'

export async function getLocationDetails(c:Context){
    const prisma =new  PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const response = await prisma.location.findMany({});
        return c.json({
            result:response
        });
    }catch(err){
        return c.body(`Internal server error : ${err}`,500);
    }
    finally{
        await prisma.$disconnect();
    }
}

export async function setLocationDetails(c : Context){
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const body:{
            pincode:number;
            state:string;
            district:string;
            mandal:string
        } = await c.req.json();

        const response =await prisma.location.create({
            data:{
                pincode : body.pincode,
                state: body.state.toLowerCase(),
                district : body.district.toLowerCase(),
                mandal : body.mandal.toLowerCase()
            }
        })
        
        return c.json({
            result:response
        })

    }catch(err){
        return c.body(`Internal server error : ${err}`,500)
    }
    finally{
        await prisma.$disconnect();
    }
}

export async function updateLocationDetails(c:Context){
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const body:{
            pincode:number;
            state:string;
            district:string;
            mandal:string
        } = await c.req.json();


        const response =await prisma.location.update({
            where:{
                pincode:body.pincode
            },
            data:{
                state: body.state.toLowerCase(),
                district : body.district.toLowerCase(),
                mandal : body.mandal.toLowerCase()
            }
        })
        return c.json({
            result:response
        })

    }catch(err){
        return c.body(`Internal server error : ${err}`,500)
    }
    finally{
        await prisma.$disconnect();
    }
}