import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Profile } from './interfaces/profiles.interface';
import { ProfileDto } from './dto/profiles-dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfilesService {


  constructor(@InjectModel('Profiles') private readonly userModel: Model<Profile>) { }
 
    // Post a single user
    async createProfile(createProfileDTO: ProfileDto): Promise<Profile> {
 
      const profile = new this.userModel(createProfileDTO);
      return profile.save();
    }

  // Get all profiles
  async getProfiles(): Promise<Profile[]> {
    const profiles = await this.userModel.find();
    return profiles;
  }

  // Get a single Profile
  async getProfile(id: string): Promise<Profile> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }


  // Delete Profile
  async deleteProfile(id: string): Promise<any> {
    const deleteProfile = await this.userModel.findByIdAndDelete(id);
    return deleteProfile;
  }

  // Put a single user
  async updateProfile(id: string, updateProfileDto: any): Promise<Profile> {
    const updateProfile = await this.userModel.findByIdAndUpdate(id, updateProfileDto, { new: true });
    return updateProfile;
  }

}