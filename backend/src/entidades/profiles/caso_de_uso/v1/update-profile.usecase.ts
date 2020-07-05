
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Profile } from '../../../../drivers/mongoose/interfaces/profiles/profiles.interface'


@Injectable()
export class UpdateProfileService {


  constructor(@InjectModel('Profiles') private readonly profileModel: Model<Profile>) { }
  // Put a single profile
  async updateProfile(id: string, updateProfileDto: any): Promise<Profile> {
    const updateProfile = await this.profileModel.findByIdAndUpdate(id, updateProfileDto, { new: true });
    return updateProfile;
  }

}