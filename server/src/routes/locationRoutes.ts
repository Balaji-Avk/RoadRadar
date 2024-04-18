import {Hono} from 'hono';
import { getLocationDetails, setLocationDetails, updateLocationDetails } from '../controllers/locationController';
import { authMiddleware } from '../middlewares/user';

export const locationRouter = new Hono();

locationRouter.post('/setlocation',authMiddleware,setLocationDetails);
locationRouter.get('/getlocation',getLocationDetails);
locationRouter.post('/updatelocation',authMiddleware,updateLocationDetails);

