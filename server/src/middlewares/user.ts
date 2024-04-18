import { Next} from 'hono'
import { Jwt } from 'hono/utils/jwt';

export async function authMiddleware(c:any, next : Next){
    try{
        const token :string = c.req.header('authorization').split(" ")[1] || null;

        if(token !=undefined || token != null){
            const decode = Jwt.verify(token,c.env.JWT_TOKEN);
            if(!decode){
                return c.body(`unauthorized`,401);
            }
            else{
                await next();
            }
        }
        else{
            return c.body(`unauthorized`,401);
        }

    }catch(err){
        return c.body(`unauthorized`,401);
    }
}