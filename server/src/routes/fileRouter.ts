import { Router } from 'express';
import FileController from '../controllers/FileController';

const router = Router();

router.get('/test', FileController.test);

export default router;
