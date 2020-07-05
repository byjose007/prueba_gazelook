import { Schema } from "mongoose";


export const ProjectSchema = new Schema({

     shortTitle: String,   
     mainTitle: String,
     description: String,
     profile : {type: Schema.Types.ObjectId, ref: 'Profile'},
});

