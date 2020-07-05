
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Profile } from '../../../../drivers/mongoose/interfaces/profiles/profiles.interface'


@Injectable()
export class DeleteProfileService {


  constructor(@InjectModel('Profiles') private readonly profileModel: Model<Profile>) { }
  // Delete Profile
  async deleteProfile(id: string): Promise<any> {
    const deleteProfile = await this.profileModel.findByIdAndDelete(id);
    return deleteProfile;
  }

}