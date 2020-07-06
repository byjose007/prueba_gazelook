
import { Document } from 'mongoose';
import { Project } from 'src/drivers/mongoose/interfaces/projects/projects.interface';

export interface Media extends Document{
    readonly idProject: Project;
    readonly title: string;
    readonly fileUrl: string;
}

