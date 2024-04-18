import { Next } from "hono";

export async function poleAPI(c:any ,  next :Next){
    const api = c.req.header('apikey');
    if(api == c.env.APIKEY){
        await next();
    }
    else{
        return c.body(`Invalid APIKEY`,401);
    }
}