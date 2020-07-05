import { GetAllMediaService } from './../../caso_de_uso/v1/get-all-media.usecase';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('medias')
@Controller('api/v1/media')
export class GetAllMediaController {
  constructor(private readonly mediaService: GetAllMediaService) { }
  foto: any;

    // Get Medias /medias
    @Get('/all')
    async getMedias(@Res() res) {
        const medias = await this.mediaService.getMedias();
        return res.status(HttpStatus.OK).json(medias);
    }
  
}
