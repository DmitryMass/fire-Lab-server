import { Router } from 'express';
import {
    createCourse,
    getCourses,
    getCurrentCourse,
} from '../controllers/course';

const router = Router();

router.get('/course', getCourses);
router.get('/course/:id', getCurrentCourse);
router.post('/course', createCourse);

export default router;
