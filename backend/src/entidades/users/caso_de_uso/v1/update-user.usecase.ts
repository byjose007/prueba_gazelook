
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../../../drivers/mongoose/interfaces/users/users.interface'


@Injectable()
export class UpdateUserService {


  constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }
  // Put a single user
  async updateUser(id: string, updateUserDto: any): Promise<User> {
    const updateUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    return updateUser;
  }

}