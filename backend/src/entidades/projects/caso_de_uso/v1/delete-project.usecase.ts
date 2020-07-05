
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Project } from '../../../../drivers/mongoose/interfaces/projects/projects.interface'


@Injectable()
export class DeleteProjectService {


  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) { }
  // Delete Project
  async deleteProject(id: string): Promise<any> {
    const deleteProject = await this.projectModel.findByIdAndDelete(id);
    return deleteProject;
  }

}