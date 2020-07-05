
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Media } from '../../../../drivers/mongoose/interfaces/medias/media.interface'


@Injectable()
export class UpdateMediaService {


  constructor(@InjectModel('Media') private readonly mediaModel: Model<Media>) { }
  // Put a single media
  async updateMedia(id: string, updateMediaDto: any): Promise<Media> {
    const updateMedia = await this.mediaModel.findByIdAndUpdate(id, updateMediaDto, { new: true });
    return updateMedia;
  }

}