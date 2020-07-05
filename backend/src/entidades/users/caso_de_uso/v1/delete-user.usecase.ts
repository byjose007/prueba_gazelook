
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../../../drivers/mongoose/interfaces/users/users.interface'


@Injectable()
export class DeleteUserService {


  constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }
  // Delete User
  async deleteUser(id: string): Promise<any> {
    const deleteUser = await this.userModel.findByIdAndDelete(id);
    return deleteUser;
  }

}