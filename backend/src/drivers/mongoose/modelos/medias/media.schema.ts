import { Schema } from "mongoose";


export const MediaSchema = new Schema({
     title: String,
     file: String,
     project : {type: Schema.Types.ObjectId, ref: 'Project'},
});

