
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {Profile} from '../../../../drivers/mongoose/interfaces/profiles/profiles.interface'


@Injectable()
export class GetProfileService {


  constructor(@InjectModel('Profiles') private readonly profileModel: Model<Profile>) { }
  // Get a single Profile
  async getProfile(id: string): Promise<Profile> {
    const profile = await this.profileModel.findById(id);
    if (!profile) {
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }
    return profile;
  }


  async findOne(email: string): Promise<any> {
    const profile = await this.profileModel.find({email: email});
    return profile;
  }


}