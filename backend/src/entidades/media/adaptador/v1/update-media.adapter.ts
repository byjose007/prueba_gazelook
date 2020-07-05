import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Put, Body, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateMediaService } from '../../caso_de_uso/v1/update-media.usecase';
import { MediaDto } from '../../entidad/mediaEntidad';



@ApiTags('medias')
@Controller('api/v1/media')
export class UpdateMediaController {
  constructor(private readonly mediaService: UpdateMediaService) { }


  //   // Update Media: /update?id=5c9d45e705ea4843c8d0e8f7
  @Put('/update')
  async updateMedia(@Res() res, @Body() createMediaDTO: MediaDto, @Query('id') id: string) {
    const updatedMedia = await this.mediaService.updateMedia(id, createMediaDTO);
    if (!updatedMedia) { throw new NotFoundException('Media does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Media Updated Successfully',
      updatedMedia,
    });
  }


}
