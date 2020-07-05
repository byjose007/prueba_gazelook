
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {User} from '../../../../drivers/mongoose/interfaces/users/users.interface'


@Injectable()
export class GetAllUserService {


  constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }
 
  // Get all users
  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
}