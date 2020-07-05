import { Document } from 'mongoose';
import { Profile } from 'src/drivers/mongoose/interfaces/profiles/profiles.interface';

export interface Project extends Document{
    readonly shortTitle: string;
    readonly mainTitle: string;
    readonly description?: string;
    readonly profile: Profile;
}

