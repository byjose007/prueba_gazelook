import { Document } from 'mongoose';

export interface User extends Document{
    readonly email: String
    readonly password: String
    readonly language:  String
}

