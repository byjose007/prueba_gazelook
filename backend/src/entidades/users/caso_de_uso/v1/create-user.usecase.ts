
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../../entidad/usersEntidad';
import { User } from '../../../../drivers/mongoose/interfaces/users/users.interface'


@Injectable()
export class CreateUserService {


  constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }

  // Post a single user
  async createUser(createUserDTO: UserDto): Promise<User> {


    const hashedPassword = await bcrypt.hash(createUserDTO.password, 10);
    createUserDTO.password = hashedPassword;
    const user = new this.userModel(createUserDTO);

    try {
      return await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }
}