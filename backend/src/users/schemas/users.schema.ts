import { Schema } from "mongoose";
import * as bcrypt from 'bcrypt';


export const UserSchema = new Schema({
    email: {type: String, index: true, unique: true},
    password: {type: String, index: true},
    language:  String

});




