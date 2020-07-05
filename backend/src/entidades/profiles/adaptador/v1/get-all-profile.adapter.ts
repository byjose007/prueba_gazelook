import { GetAllProfileService } from './../../caso_de_uso/v1/get-all-profile.usecase';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('profiles')
@Controller('api/v1/profile')
export class GetAllProfileController {
  constructor(private readonly profileService: GetAllProfileService) { }
  foto: any;

    // Get Profiles /profiles
    @Get('/all')
    async getProfiles(@Res() res) {
        const profiles = await this.profileService.getProfiles();
        return res.status(HttpStatus.OK).json(profiles);
    }
  
}
