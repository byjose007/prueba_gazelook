import { DeleteMediaService } from './delete-media.usecase';
import { UpdateMediaService } from './update-media.usecase';
import { GetMediaService } from './get-media.usecase';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from 'src/drivers/mongoose/modelos/medias/media.schema';
import { CreateMediaService } from './create-media.usecase';
import { GetAllMediaService } from './get-all-media.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Media', schema: MediaSchema }])],
  providers: [
    CreateMediaService,
    GetAllMediaService,
    GetMediaService,
    UpdateMediaService,
    DeleteMediaService,
  ],
  exports: [
    CreateMediaService,
    GetAllMediaService,
    GetMediaService,
    UpdateMediaService,
    DeleteMediaService,
  ],
  controllers: [],
})
export class UsesCasesMediasModule {}
