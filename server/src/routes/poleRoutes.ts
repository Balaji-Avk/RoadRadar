import {Hono} from 'hono';
import { getPoleDetails, getPoleDetailsSearch, setPoleDetails, updatePoleDetails } from '../controllers/poleController';
import { poleAPI } from '../middlewares/pole';
import { authMiddleware } from '../middlewares/user';

export const poleRouter = new Hono();

poleRouter.get('/getpoledetailsall',getPoleDetails);
poleRouter.get('/getpoledetails',getPoleDetailsSearch);
poleRouter.post('/setpoledetails',poleAPI,setPoleDetails);
poleRouter.post('/updatepoledetails',authMiddleware,updatePoleDetails);