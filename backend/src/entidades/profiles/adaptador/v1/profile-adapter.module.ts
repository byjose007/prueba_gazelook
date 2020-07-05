import { DeleteProfileController } from './delete-profile.adapter';
import { Module, Delete } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from 'src/drivers/mongoose/modelos/profiles/profiles.schema';
import { CreateProfileController } from './create-profile.adapter';
import { GetAllProfileController } from './get-all-profile.adapter';
import { UsesCasesProfilesModule } from '../../caso_de_uso/v1/uses-cases.module';
import { UpdateProfileController } from './update-profile.adapter';
import { GetProfileController } from './get-profile.adapter';

@Module({
  imports: [UsesCasesProfilesModule],
  providers: [],
  exports: [],
  controllers: [
    CreateProfileController,
    GetAllProfileController,
    DeleteProfileController,
    UpdateProfileController,
    GetProfileController,
  ],
})
export class ProfileAdapterModule {}
