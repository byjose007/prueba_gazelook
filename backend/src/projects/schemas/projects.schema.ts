import { Schema } from "mongoose";


export const ProjectSchema = new Schema({

     shortTitle: String,   
     mainTitle: String,
     description: String,
     media: Array
});

