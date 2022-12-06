import mongoose from 'mongoose';

export interface ICourse {
    title: string;
    checked: boolean;
    description: string;
    videoLink: string;
}

const Course = new mongoose.Schema<ICourse>(
    {
        title: {
            type: String,
            null: false,
        },
        checked: {
            type: Boolean,
            null: false,
        },
        description: {
            type: String,
            null: false,
        },
        videoLink: {
            type: String,
            null: false,
        },
    },
    {
        timestamps: false,
    }
);

export default mongoose.model('Course', Course);
