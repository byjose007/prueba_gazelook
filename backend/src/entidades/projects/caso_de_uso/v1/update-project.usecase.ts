
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Project } from '../../../../drivers/mongoose/interfaces/projects/projects.interface'


@Injectable()
export class UpdateProjectService {


  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) { }
  // Put a single project
  async updateProject(id: string, updateProjectDto: any): Promise<Project> {
    const updateProject = await this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true });
    return updateProject;
  }

}