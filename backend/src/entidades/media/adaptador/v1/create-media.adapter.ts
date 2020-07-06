import { CreateMediaService } from './../../caso_de_uso/v1/create-media.usecase';
import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe, Logger, UploadedFiles, Next } from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MediaDto } from '../../entidad/mediaEntidad';
// import * as multerGoogleStorage from 'multer-google-storage';
// import { diskStorage } from 'multer';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';

import { Storage } from '@google-cloud/storage';


@ApiTags('medias')
@Controller('api/v1/media')
export class CreateMediaController {
  constructor(private readonly mediaService: CreateMediaService) { }
  foto: any;

   // upload files google storage
  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })

  @UseInterceptors(FileInterceptor('file'))
  async createMedia(@UploadedFile() files, @Res() res, @Body() createMediaDTO: MediaDto, @Next() next) {

    const storage = new Storage({
      keyFilename: process.env.keyFilename,
      projectId: process.env.projectId
    });

    const bucketname = 'prueba_gazelook';
    const filename = Date.now() + files.originalname;
    const bucket = storage.bucket(bucketname);
    const file = bucket.file(filename);

    const stream = file.createWriteStream({
      metadata: {
        contentType: files.mimetype
      }
    });

    stream.on('error', (err) => {
      files.cloudStorageError = err;
    });

    stream.on('finish', () => {
      files.cloudStorageObject = filename;
      file.makePublic().then(async (data: any) => {
        createMediaDTO.fileUrl = `https://storage.googleapis.com/${bucketname}/${data[0].object}`;
        const media = await this.mediaService.createMedia(createMediaDTO);
        return res.status(HttpStatus.OK).json({
          message: 'Media Successfully Created',
          media,
        });
      });
    });

    stream.end(files.buffer);

  }
}