import * as mongoose from 'mongoose';
export const PostSchema = new mongoose.Schema({
    created_at: Date,
    title: String,
    author: String,
});