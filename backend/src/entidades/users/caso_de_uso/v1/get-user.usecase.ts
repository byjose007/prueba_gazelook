
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {User} from '../../../../drivers/mongoose/interfaces/users/users.interface'


@Injectable()
export class GetUserService {


  constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }
  // Get a single User
  async getUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }


  async findOne(email: string): Promise<any> {
    const user = await this.userModel.find({email: email});
    return user;
  }


}