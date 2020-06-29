import { ProjectSchema } from './schemas/projects.schema';
import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'Projects', schema: ProjectSchema }]),
],
  providers: [ProjectsService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
