import { Router } from 'express';
import {
    createCourse,
    getCourses,
    getCurrentCourse,
    updateCourse,
} from '../controllers/course';

const router = Router();

router.get('/course', getCourses);
router.get('/course/:id', getCurrentCourse);
router.post('/course', createCourse);
router.put('/course/:id', updateCourse);

export default router;
