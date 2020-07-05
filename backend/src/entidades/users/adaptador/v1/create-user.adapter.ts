import { CreateUserService } from './../../caso_de_uso/v1/create-user.usecase';
import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe } from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../entidad/usersEntidad';


@ApiTags('users')
@Controller('api/v1/user')
export class CreateUserController {
  constructor(private readonly userService: CreateUserService​​) { }
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

  
}
