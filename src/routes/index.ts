//router index file
import { Router } from 'express';
import DocumentRouter from './DocumentRouter';

const router: Router = Router();

router.use('/documents', DocumentRouter);

export default router;