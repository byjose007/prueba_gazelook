import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { UserDto } from './dto/users-dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {


  constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }
 
    // Post a single user
    async createUser(createUserDTO: UserDto): Promise<User> {
      const { email, password } = createUserDTO;
      
      const hashedPassword = await bcrypt.hash(password, 10);  
      const user = new this.userModel({ email, password: hashedPassword });

      try {
        return await user.save();
      } catch (error) {
        if (error.code === 11000) {
          throw new ConflictException('User already exists');
        }
        throw error;
      } 
    }

  // Get all users
  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOne(email: string): Promise<any> {
    const user = await this.userModel.find({email: email});
    return user;
  }

  // Get a single User
  async getUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }


  // Delete User
  async deleteUser(id: string): Promise<any> {
    const deleteUser = await this.userModel.findByIdAndDelete(id);
    return deleteUser;
  }

  // Put a single user
  async updateUser(id: string, updateUserDto: any): Promise<User> {
    const updateUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    return updateUser;
  }

}