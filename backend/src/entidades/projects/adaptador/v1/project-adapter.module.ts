import { DeleteProjectController } from './delete-project.adapter';
import { Module, Delete } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from 'src/drivers/mongoose/modelos/projects/projects.schema';
import { CreateProjectController } from './create-project.adapter';
import { GetAllProjectController } from './get-all-project.adapter';
import { UsesCasesProjectsModule } from '../../caso_de_uso/v1/uses-cases.module';
import { UpdateProjectController } from './update-project.adapter';
import { GetProjectController } from './get-project.adapter';

@Module({
  imports: [UsesCasesProjectsModule],
  providers: [],
  exports: [],
  controllers: [
    CreateProjectController,
    GetAllProjectController,
    DeleteProjectController,
    UpdateProjectController,
    GetProjectController,
  ],
})
export class ProjectAdapterModule {}
