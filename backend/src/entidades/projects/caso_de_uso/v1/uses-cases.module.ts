import { DeleteProjectService } from './delete-project.usecase';
import { UpdateProjectService } from './update-project.usecase';
import { GetProjectService } from './get-project.usecase';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from 'src/drivers/mongoose/modelos/projects/projects.schema';
import { CreateProjectService } from './create-project.usecase';
import { GetAllProjectService } from './get-all-project.usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Projects', schema: ProjectSchema }])],
  providers: [
    CreateProjectService,
    GetAllProjectService,
    GetProjectService,
    UpdateProjectService,
    DeleteProjectService,
  ],
  exports: [
    CreateProjectService,
    GetAllProjectService,
    GetProjectService,
    UpdateProjectService,
    DeleteProjectService,
  ],
  controllers: [],
})
export class UsesCasesProjectsModule {}
