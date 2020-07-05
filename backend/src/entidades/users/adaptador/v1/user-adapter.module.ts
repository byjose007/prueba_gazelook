import { DeleteUserController } from './delete-user.adapter';

import { Module, Delete } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from 'src/drivers/mongoose/modelos/users/users.schema';
import { CreateUserController } from './create-user.adapter';
import { GetAllUserController } from './get-all-user.adapter';
import { UsesCasesUsersModule } from '../../caso_de_uso/v1/uses-cases.module';
import { UpdateUserController } from './update-user.adapter';
import { GetUserController } from './get-user.adapter';

@Module({
  imports: [UsesCasesUsersModule],
  providers: [],
  exports: [],
  controllers: [
    CreateUserController,
    GetAllUserController,
    DeleteUserController,
    UpdateUserController,
    GetUserController,
  ],
})
export class UserAdapterModule {}
