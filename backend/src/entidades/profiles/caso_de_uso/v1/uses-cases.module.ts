import { DeleteProfileService } from './delete-profile.usecase';
import { UpdateProfileService } from './update-profile.usecase';
import { GetProfileService } from './get-profile.usecase';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from 'src/drivers/mongoose/modelos/profiles/profiles.schema';
import { CreateProfileService } from './create-profile.usecase';
import { GetAllProfileService } from './get-all-profile.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Profiles', schema: ProfileSchema }])],
  providers: [
    CreateProfileService,
    GetAllProfileService,
    GetProfileService,
    UpdateProfileService,
    DeleteProfileService,
  ],
  exports: [
    CreateProfileService,
    GetAllProfileService,
    GetProfileService,
    UpdateProfileService,
    DeleteProfileService,
  ],
  controllers: [],
})
export class UsesCasesProfilesModule {}
