import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from 'src/drivers/mongoose/modelos/medias/media.schema';
import { MediaAdapterModule } from './adaptador/v1/media-adapter.module';

@Module({
  imports: [MediaAdapterModule],
  providers: [],
  controllers: [],
})
export class MediaModule {}
