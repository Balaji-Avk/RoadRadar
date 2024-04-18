import { Hono } from 'hono'
import { cors } from 'hono/cors'
import {userRouter} from './routes/userRoutes'
import { poleRouter } from './routes/poleRoutes';
import { locationRouter } from './routes/locationRoutes';

const app = new Hono()

app.use(cors());

app.route('/api/user',userRouter);
app.route('/api/pole',poleRouter);
app.route('/api/location',locationRouter);

app.get('/',(c)=>{
  return c.text(`hello world`);
})

export default app
