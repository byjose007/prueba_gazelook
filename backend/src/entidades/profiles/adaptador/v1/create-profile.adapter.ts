import { CreateProfileService } from './../../caso_de_uso/v1/create-profile.usecase';
import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe } from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProfileDto } from '../../entidad/profileEntidad';


@ApiTags('profiles')
@Controller('api/v1/profile')
export class CreateProfileController {
  constructor(private readonly profileService: CreateProfileService) { }


  // Add Profile: /profiles/create
  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createProfile(@Res() res, @Body() createProfileDTO: ProfileDto) {
      const profile = await this.profileService.createProfile(createProfileDTO);
      return res.status(HttpStatus.OK).json({
          message: 'Profile Successfully Created',
          profile,
      });
  }

  
}
