import { MediaDto } from './../../entidad/mediaEntidad';
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Media } from '../../../../drivers/mongoose/interfaces/medias/media.interface'


@Injectable()
export class CreateMediaService {


  constructor(@InjectModel('Media') private readonly mediaModel: Model<Media>) { }

  // Post a single media
  async createMedia(createMediaDTO: MediaDto): Promise<Media> { 
 
    const media = new this.mediaModel(createMediaDTO);
    return media.save();
  }

  }
