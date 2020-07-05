
import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteProfileService } from '../../caso_de_uso/v1/delete-profile.usecase';



@ApiTags('profiles')
@Controller('api/v1/profile')
export class DeleteProfileController {
  constructor(private readonly profileService: DeleteProfileService) { }

  // Delete Profile: /delete?id=5c9d45e705ea4843c8d0e8f7
  @Delete('/delete')
  async deleteProfile(@Res() res, @Query('id') id: string) {
    const profileDeleted = await this.profileService.deleteProfile(id);
    if (!profileDeleted) { throw new NotFoundException('Profile does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Profile Deleted Successfully',
      profileDeleted,
    });
  }


}
