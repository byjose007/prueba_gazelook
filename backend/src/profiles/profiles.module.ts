import { ProfileSchema } from './schemas/profiles.schema';
import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'Profiles', schema: ProfileSchema }]),
],
  providers: [ProfilesService],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
