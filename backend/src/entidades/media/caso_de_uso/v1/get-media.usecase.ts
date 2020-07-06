
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {Media} from '../../../../drivers/mongoose/interfaces/medias/media.interface'


@Injectable()
export class GetMediaService {


  constructor(@InjectModel('Media') private readonly mediaModel: Model<Media>) { }
  // Get a single Media
  async getMedia(id: string): Promise<Media> {
    const media = await this.mediaModel.findById(id);
    if (!media) {
      throw new HttpException('Media not found', HttpStatus.NOT_FOUND);
    }
    return media;
  }


 


}