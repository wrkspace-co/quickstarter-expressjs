import { Router } from 'express';
import { index } from '../controllers/homeController';

const router = Router();

router.get('/', index);

export default router;
