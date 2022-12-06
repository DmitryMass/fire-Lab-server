import mongoose from 'mongoose';

const Course = new mongoose.Schema(
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
