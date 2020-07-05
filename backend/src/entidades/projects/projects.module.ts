import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from 'src/drivers/mongoose/modelos/projects/projects.schema';
import { ProjectAdapterModule } from './adaptador/v1/project-adapter.module';

@Module({
  imports: [ProjectAdapterModule],
  providers: [],
  controllers: [],
})
export class ProjectsModule {}
