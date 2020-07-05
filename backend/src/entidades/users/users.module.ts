import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/drivers/mongoose/modelos/users/users.schema';
import { UserAdapterModule } from './adaptador/v1/user-adapter.module';

@Module({
  imports: [UserAdapterModule],
  providers: [],
  controllers: [],
})
export class UsersModule {}
