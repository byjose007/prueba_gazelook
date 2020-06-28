import { UserSchema } from './schemas/users.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
