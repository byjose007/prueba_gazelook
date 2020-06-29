import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe } from '@nestjs/common';
import { diskStorage } from 'multer';
import { ProfilesService } from './profiles.service';
import { ProfileDto } from './dto/profiles-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Profile } from './interfaces/profiles.interface';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { query } from 'express';

@ApiTags('profiles')
@Controller('api/profile')
export class ProfilesController {
  constructor(private readonly userService: ProfilesService) { }
  foto: any;

  // Add Profile: /profiles/create
  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createProfile(@Res() res, @Body() createProfileDTO: ProfileDto) {
      const user = await this.userService.createProfile(createProfileDTO);
      return res.status(HttpStatus.OK).json({
          message: 'Profile Successfully Created',
          user,
      });
  }

  // Get Profiles /profiles
  @Get('/all')
  async getProfiles(@Res() res) {
      const profiles = await this.userService.getProfiles();
      return res.status(HttpStatus.OK).json(profiles);
  }

  // GET single user: /profiles/5c9d46100e2e5c44c444b2d1
  @Get('/:id')
  async getProfile(@Res() res, @Param('id') id:string) {
      const user = await this.userService.getProfile(id);
      if (!user) { throw new NotFoundException('Profile does not exist!'); }
      return res.status(HttpStatus.OK).json(user);
  }

  // Delete Profile: /delete?id=5c9d45e705ea4843c8d0e8f7
  @Delete('/delete')
  async deleteProfile(@Res() res, @Query('id') id:string) {
      const userDeleted = await this.userService.deleteProfile(id);
      if (!userDeleted) { throw new NotFoundException('Profile does not exist!'); }
      return res.status(HttpStatus.OK).json({
          message: 'Profile Deleted Successfully',
          userDeleted,
      });
  }

  // Update Profile: /update?id=5c9d45e705ea4843c8d0e8f7
  @Put('/update')
  async updateProfile(@Res() res, @Body() createProfileDTO: ProfileDto, @Query('id') id:string) {
      const updatedProfile = await this.userService.updateProfile(id, createProfileDTO);
      if (!updatedProfile) { throw new NotFoundException('Profile does not exist!'); }
      return res.status(HttpStatus.OK).json({
          message: 'Profile Updated Successfully',
          updatedProfile,
      });
  }

}
