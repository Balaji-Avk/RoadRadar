import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Context} from 'hono'

function checkSeverity(depth : number):string{
    if(depth<2){
        return "LOW";
    }else if(depth>2 && depth<5){
        return "MEDIUM";
    }
    else{
        return "HIGH";
    }
}

export async function getPoleDetails(c: Context){
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try{
        const response =await prisma.pole.findMany({});
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

export async function getPoleDetailsSearch(c:Context){
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    });
    try{
        const searchQuery = c.req.query('filter')?.toLowerCase() ;

        const poles = await prisma.pole.findMany({
            where: {
                OR: [
                    { location: { mandal: searchQuery } },
                    { location: { pincode: searchQuery === undefined || isNaN(parseInt(searchQuery)) ? undefined : parseInt(searchQuery) } },
                    { location: { state: searchQuery } },
                    { location: { district: searchQuery } },
                    { id : searchQuery === undefined || isNaN(parseInt(searchQuery)) ? undefined : parseInt(searchQuery)}
                ],
            },
            include: {
                location: true,
            },
        });

        return c.json({ result: poles });
    }
    catch(err){
        return c.body(`Internal server error : ${err}`,500);
    }
    finally{
        await prisma.$disconnect();
    }
}

export async function setPoleDetails(c: Context) {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{

        const body:{
            depth : number;
            breadth ?: number;
            pincode : number;
        } = await c.req.json();

        let severity=checkSeverity(body.depth);

        await prisma.pole.create({
            data:{
                depth : body.depth,
                status : "Not started",
                breadth : body.breadth || 0,
                severity : severity,
                pincode : body.pincode
            }
        });

        return c.json({
            result : "successfully created"
        },200) 
    }catch(err){
        return c.body(`Internal server error ${err}`,500)
    }
    finally{
        await prisma.$disconnect();
    }
}

export async function updatePoleDetails(c:Context){
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{

        const body:{
            id : number;
            status : string;
        } = await c.req.json();

        const response = await prisma.pole.update({
            where:{
                id : body.id
            },
            data:{
                status : body.status,
            }
        });

        return c.json({
            result : "successfully updated"
        },200);
    }catch(err){
        return c.body(`Internal server error ${err}`,500)
    }
    finally{
        await prisma.$disconnect();
    }
}