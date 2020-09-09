import { Router } from 'express';
import usersRouter from './users';
import med_videosRouter from './med_videos';
import med_categoriesRouter from './med_categories';
import affirm_videosRouter from './affirm_videos';

const router = Router();


router.use('/users', usersRouter);
router.use('/med_videos', med_videosRouter);
router.use('/med_categories', med_categoriesRouter);
router.use('/affirm_videos', affirm_videosRouter);


export default router;