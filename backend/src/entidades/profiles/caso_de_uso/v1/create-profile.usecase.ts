import { ProfileDto } from './../../entidad/profileEntidad';
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from '../../../../drivers/mongoose/interfaces/profiles/profiles.interface'


@Injectable()
export class CreateProfileService {


  constructor(@InjectModel('Profiles') private readonly profileModel: Model<Profile>) { }

  // Post a single profile
  async createProfile(createProfileDTO: ProfileDto): Promise<Profile> { 
 
    const profile = new this.profileModel(createProfileDTO);
    return profile.save();
  }

  }
