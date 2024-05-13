import mongoose from 'mongoose';

const linkSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title value']
    },
    description: {
        type: String,
        required: [true, 'Please add a description value']
    },
    url: {
        type: String,
        required: [true, 'Please add a link value'],
        unique: true
    },
    type: {
        type: String,
        required: [true, 'Please add a type value']
    },
}, { timestamps: true });

const Link = mongoose.model('Link', linkSchema);

export default Link;