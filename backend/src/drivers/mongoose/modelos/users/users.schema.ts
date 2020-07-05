import { Schema } from "mongoose";
import * as bcrypt from 'bcrypt';

const schemaOptions = {
    timestamps: { createdAt: 'fecha_creacion', updatedAt: 'fecha_actualizacion' },
} 
export const UserSchema = new Schema({
    email: {type: String, index: true, unique: true},
    password: {type: String, index: true},
    language:  String

},schemaOptions);




