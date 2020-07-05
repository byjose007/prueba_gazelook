import { DeleteUserService } from './delete-user.usecase';
import { UpdateUserService } from './update-user.usecase';
import { GetUserService } from './get-user.usecase';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/drivers/mongoose/modelos/users/users.schema';
import { CreateUserService } from './create-user.usecase';
import { GetAllUserService } from './get-all-user.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  providers: [
    CreateUserService,
    GetAllUserService,
    GetUserService,
    UpdateUserService,
    DeleteUserService,
  ],
  exports: [
    CreateUserService,
    GetAllUserService,
    GetUserService,
    UpdateUserService,
    DeleteUserService,
  ],
  controllers: [],
})
export class UsesCasesUsersModule {}
