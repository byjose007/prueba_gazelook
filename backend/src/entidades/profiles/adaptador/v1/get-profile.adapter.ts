import { GetProfileService } from './../../caso_de_uso/v1/get-profile.usecase';
import { Controller, Get,  Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';



import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('profiles')
@Controller('api/v1/profile')
export class GetProfileController {
  constructor(private readonly profileService: GetProfileService) { }

  // GET single profile: /profiles/5c9d46100e2e5c44c444b2d1
  @Get('/:id')
  async getProfile(@Res() res, @Param('id') id: string) {
    const profile = await this.profileService.getProfile(id);
    if (!profile) { throw new NotFoundException('Profile does not exist!'); }
    return res.status(HttpStatus.OK).json(profile);
  }


}
