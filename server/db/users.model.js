import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    googleId: {
        type: String,
        unique: true,
        default: ''
    },
    avatar: {
        type: String
    }
    
});

const User = mongoose.model('users', userSchema);

export default User;