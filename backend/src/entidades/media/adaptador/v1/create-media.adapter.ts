import { CreateMediaService } from './../../caso_de_uso/v1/create-media.usecase';
import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe } from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MediaDto } from '../../entidad/mediaEntidad';
import * as multerGoogleStorage from 'multer-google-storage';
import { diskStorage } from 'multer';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';


@ApiTags('medias')
@Controller('api/v1/media')
export class CreateMediaController {
  constructor(private readonly mediaService: CreateMediaService) { }
  foto: any;

  // Add Media: /medias/create 
  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  // upload files google storage
  @UseInterceptors(AnyFilesInterceptor({
      storage: multerGoogleStorage.storageEngine({
        projectId: 'singular-backup-281802',
          keyFilename: 'fdfssdgdgdsfgfdsgfdsgdsgdfs',
          bucket: 'prueba_gazelook',
          filename: (req, file, cb) => { return cb(null, new Date().toISOString() + file.originalname) }
      })
  }))
  async createMedia(@UploadedFile() file, @Res() res, @Body() createMediaDTO: MediaDto) {
      const media = await this.mediaService.createMedia(createMediaDTO);
      return res.status(HttpStatus.OK).json({
          message: 'Media Successfully Created',
          media,
      });
  }

  
}
