import { Router } from 'express';
import FileController from '../controllers/FileController';

const router = Router();

router.post('/save', FileController.save);
router.get('/read/:id', FileController.read);

export default router;
