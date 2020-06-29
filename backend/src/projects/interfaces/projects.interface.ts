import { Document } from 'mongoose';

export interface Project extends Document{
    readonly shortTitle: string;
    readonly mainTitle: string;
    readonly description?: string;
    readonly media?: Array<string>;
}

