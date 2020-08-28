import { Router } from 'express';
// import usersRouter from './users';
import med_videosRouter from './med_videos';
import med_categoriesRouter from './med_categories';

const router = Router();


// router.use('/users', usersRouter);
router.use('/med_videos', med_videosRouter);
router.use('/med_categories', med_categoriesRouter);


export default router;