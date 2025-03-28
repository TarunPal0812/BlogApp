import mongoose from "mongoose";
const postSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    timestamp: {
        type: Date,
        default: new Date(),
    },
    likes: {
        type: Number,
        default: 0,
    }
})

const UserModal = mongoose.model('User', UserSchema)

export default postSchema;