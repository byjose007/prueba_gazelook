import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from 'src/drivers/mongoose/modelos/profiles/profiles.schema';
import { ProfileAdapterModule } from './adaptador/v1/profile-adapter.module';

@Module({
  imports: [ProfileAdapterModule],
  providers: [],
  controllers: [],
})
export class ProfilesModule {}
