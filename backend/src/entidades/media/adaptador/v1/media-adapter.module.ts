import { DeleteMediaController } from './delete-media.adapter';
import { Module, Delete } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from 'src/drivers/mongoose/modelos/medias/media.schema';
import { CreateMediaController } from './create-media.adapter';
import { GetAllMediaController } from './get-all-media.adapter';
import { UsesCasesMediasModule } from '../../caso_de_uso/v1/uses-cases.module';
import { UpdateMediaController } from './update-media.adapter';
import { GetMediaController } from './get-media.adapter';

@Module({
  imports: [UsesCasesMediasModule],
  providers: [],
  exports: [],
  controllers: [
    CreateMediaController,
    GetAllMediaController,
    DeleteMediaController,
    UpdateMediaController,
    GetMediaController,
  ],
})
export class MediaAdapterModule {}
