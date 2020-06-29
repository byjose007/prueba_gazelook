import { Schema } from "mongoose";
import { bcrypt } from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

export const ProfileSchema = new Schema({

     album: String,
     contactName: { type: String, required: true },
     fullName: String,
     telephone: String,   
     country: { type: String, required: true },
     location: { type: String, required: true },
     postlCode: { type: String, required: true },
    

});

