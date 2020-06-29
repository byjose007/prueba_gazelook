import { User } from './../../users/interfaces/users.interface';
import { Project } from 'src/projects/interfaces/projects.interface';
import { Document } from 'mongoose';

export interface Profile extends Document{

    readonly album?: string;

    readonly contactName: string;

    readonly fullName: string;

    readonly telephone: string;
   
    readonly country: string;

    readonly location: string;
    
    readonly postlCode: string;

    readonly user: User,

    readonly projects : Project[],
}

