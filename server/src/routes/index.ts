import Router from 'express';
import fileRouter from './fileRouter';

const router = Router();

router.use('/file', fileRouter);

export default router;
