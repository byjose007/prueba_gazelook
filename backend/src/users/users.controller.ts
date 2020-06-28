import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe } from '@nestjs/common';
import { diskStorage } from 'multer';
import { UsersService } from './users.service';
import { UserDto } from './dto/users-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from './interfaces/users.interface';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { query } from 'express';

@ApiTags('users')
@Controller('api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) { }
  foto: any;

  // Add User: /users/create
  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(@Res() res, @Body() createUserDTO: UserDto) {
      const user = await this.userService.createUser(createUserDTO);
      return res.status(HttpStatus.OK).json({
          message: 'User Successfully Created',
          user,
      });
  }

  // Get Users /users
  @Get('/all')
  async getUsers(@Res() res) {
      const users = await this.userService.getUsers();
      return res.status(HttpStatus.OK).json(users);
  }

  // GET single user: /users/5c9d46100e2e5c44c444b2d1
  @Get('/:id')
  async getUser(@Res() res, @Param('id') id:string) {
      const user = await this.userService.getUser(id);
      if (!user) { throw new NotFoundException('User does not exist!'); }
      return res.status(HttpStatus.OK).json(user);
  }

  // Delete User: /delete?id=5c9d45e705ea4843c8d0e8f7
  @Delete('/delete')
  async deleteUser(@Res() res, @Query('id') id:string) {
      const userDeleted = await this.userService.deleteUser(id);
      if (!userDeleted) { throw new NotFoundException('User does not exist!'); }
      return res.status(HttpStatus.OK).json({
          message: 'User Deleted Successfully',
          userDeleted,
      });
  }

  // Update User: /update?id=5c9d45e705ea4843c8d0e8f7
  @Put('/update')
  async updateUser(@Res() res, @Body() createUserDTO: UserDto, @Query('id') id:string) {
      const updatedUser = await this.userService.updateUser(id, createUserDTO);
      if (!updatedUser) { throw new NotFoundException('User does not exist!'); }
      return res.status(HttpStatus.OK).json({
          message: 'User Updated Successfully',
          updatedUser,
      });
  }

}
