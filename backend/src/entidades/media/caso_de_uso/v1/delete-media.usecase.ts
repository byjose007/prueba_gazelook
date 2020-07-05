
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Media } from '../../../../drivers/mongoose/interfaces/medias/media.interface'


@Injectable()
export class DeleteMediaService {


  constructor(@InjectModel('Media') private readonly mediaModel: Model<Media>) { }
  // Delete Media
  async deleteMedia(id: string): Promise<any> {
    const deleteMedia = await this.mediaModel.findByIdAndDelete(id);
    return deleteMedia;
  }

}