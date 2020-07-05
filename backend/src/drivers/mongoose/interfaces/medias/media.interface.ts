
import { Document } from 'mongoose';
import { Project } from 'src/drivers/mongoose/interfaces/projects/projects.interface';

export interface Media extends Document{
    readonly project: Project;
    readonly title: string;
    readonly file: string;
}

