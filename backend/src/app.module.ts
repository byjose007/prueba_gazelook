import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { ProfilesModule } from './profiles/profiles.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
//config
import configuration from '../config/config/default';
import { UsersModule } from './entidades/users/users.module';
import { UsesCasesUsersModule } from './entidades/users/caso_de_uso/v1/uses-cases.module';

@Module({
  imports: [
    //config
    ConfigModule.forRoot({
      load: [configuration],
    }),
    //database
    MongooseModule.forRoot(process.env.MONGO_PATH, {
      useNewUrlParser: true,       
        useFindAndModify: true,
        useCreateIndex: true,
      
    }),
    UsersModule,
    ProfilesModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
