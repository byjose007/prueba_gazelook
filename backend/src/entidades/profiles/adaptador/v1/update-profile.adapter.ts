import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Put, Body, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateProfileService } from '../../caso_de_uso/v1/update-profile.usecase';
import { ProfileDto } from '../../entidad/profileEntidad';



@ApiTags('profiles')
@Controller('api/v1/profile')
export class UpdateProfileController {
  constructor(private readonly profileService: UpdateProfileService) { }


  //   // Update Profile: /update?id=5c9d45e705ea4843c8d0e8f7
  @Put('/update')
  async updateProfile(@Res() res, @Body() createProfileDTO: ProfileDto, @Query('id') id: string) {
    const updatedProfile = await this.profileService.updateProfile(id, createProfileDTO);
    if (!updatedProfile) { throw new NotFoundException('Profile does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Profile Updated Successfully',
      updatedProfile,
    });
  }


}
