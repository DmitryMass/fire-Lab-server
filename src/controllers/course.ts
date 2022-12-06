import { RequestHandler } from 'express';
import Course, { ICourse } from '../models/Course';

export const getCourses: RequestHandler = async (req, res) => {
    try {
        const courses = await Course.find({});
        if (!courses) {
            return res.status(404).send({ message: 'Курсів не знайдено' });
        }
        return res.status(200).send(courses);
    } catch (e) {
        return res.status(404).send({ message: 'Не знайдено курсів' });
    }
};

export const getCurrentCourse: RequestHandler = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const course = await Course.findOne({ _id: id }).exec();
        if (!course) {
            return res.status(400).send({ message: 'Курс не знайдено' });
        }
        return res.status(200).send(course);
    } catch (e) {
        return res.status(401).send({ message: 'Курсу не існує' });
    }
};

export const createCourse: RequestHandler = async (req, res) => {
    try {
        const body = req.body;
        const course = new Course<ICourse>({
            ...body,
        });

        await course.save();
        return res.status(200).send({ message: 'Ok' });
    } catch (e) {
        return res.status(404).send({ message: 'Курс не створено' });
    }
};

export const updateCourse: RequestHandler = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const course = await Course.findOne({ _id: id });
        console.log(id, course);

        await course?.updateOne({
            course,
            checked: !course.checked,
        });

        await course?.save();

        return res.status(200).send({ message: 'Ok' });
    } catch (e) {
        return res.status(401).send({ message: 'Не вдалося обновити' });
    }
};
