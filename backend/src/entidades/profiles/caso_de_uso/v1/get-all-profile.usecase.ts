
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {Profile} from '../../../../drivers/mongoose/interfaces/profiles/profiles.interface'


@Injectable()
export class GetAllProfileService {


  constructor(@InjectModel('Profiles') private readonly profileModel: Model<Profile>) { }
 
  // Get all profiles
  async getProfiles(): Promise<Profile[]> {
    const profiles = await this.profileModel.find();
    return profiles;
  }
}