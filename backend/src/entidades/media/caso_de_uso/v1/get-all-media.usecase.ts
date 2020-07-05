
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {Media} from '../../../../drivers/mongoose/interfaces/medias/media.interface'


@Injectable()
export class GetAllMediaService {


  constructor(@InjectModel('Media') private readonly projectModel: Model<Media>) { }
 
  // Get all Medias
  async getMedias(): Promise<Media[]> {
    const Medias = await this.projectModel.find();
    return Medias;
  }
}