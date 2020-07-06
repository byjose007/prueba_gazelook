import { Schema } from "mongoose";


export const MediaSchema = new Schema({
     title: String,
     fileUrl: { type: String, required: false },
     idProject : {type: Schema.Types.ObjectId, ref: 'Project'},
});

