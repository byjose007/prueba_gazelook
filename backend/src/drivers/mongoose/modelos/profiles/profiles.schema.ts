import { Schema } from "mongoose";

const schemaOptions = {
     timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
 } 

export const ProfileSchema = new Schema({

     album: String,
     contactName: { type: String, required: true },
     fullName: String,
     telephone: String,   
     country: { type: String, required: true },
     location: { type: String, required: true },
     postlCode: { type: String, required: true },
     user: {type: Schema.Types.ObjectId, ref: 'User'}  

});  



