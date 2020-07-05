
import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteMediaService } from '../../caso_de_uso/v1/delete-media.usecase';



@ApiTags('medias')
@Controller('api/v1/media')
export class DeleteMediaController {
  constructor(private readonly mediaService: DeleteMediaService) { }

  // Delete Media: /delete?id=5c9d45e705ea4843c8d0e8f7
  @Delete('/delete')
  async deleteMedia(@Res() res, @Query('id') id: string) {
    const mediaDeleted = await this.mediaService.deleteMedia(id);
    if (!mediaDeleted) { throw new NotFoundException('Media does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Media Deleted Successfully',
      mediaDeleted,
    });
  }


}
