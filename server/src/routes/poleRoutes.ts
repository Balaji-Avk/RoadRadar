import {Hono} from 'hono';
import { getPoleDetails, getPoleDetailsSearch, setPoleDetails } from '../controllers/poleController';
import { poleAPI } from '../middlewares/pole';

export const poleRouter = new Hono();

poleRouter.get('/getpoledetailsall',getPoleDetails);
poleRouter.get('/getpoledetails',getPoleDetailsSearch);
poleRouter.post('/setpoledetails',poleAPI,setPoleDetails);
