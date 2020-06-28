import { Schema } from "mongoose";
import { bcrypt } from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

export const UserSchema = new Schema({
    email: {type: String, index: true, unique: true},
    password: {type: String, index: true},
    language:  String

});

