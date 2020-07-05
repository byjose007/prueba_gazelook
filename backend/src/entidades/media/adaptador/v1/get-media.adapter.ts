import { GetMediaService } from './../../caso_de_uso/v1/get-media.usecase';
import { Controller, Get,  Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';



import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('medias')
@Controller('api/v1/media')
export class GetMediaController {
  constructor(private readonly mediaService: GetMediaService) { }

  // GET single media: /medias/5c9d46100e2e5c44c444b2d1
  @Get('/:id')
  async getMedia(@Res() res, @Param('id') id: string) {
    const media = await this.mediaService.getMedia(id);
    if (!media) { throw new NotFoundException('Media does not exist!'); }
    return res.status(HttpStatus.OK).json(media);
  }


}
