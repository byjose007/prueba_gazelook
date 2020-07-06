
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {Project} from '../../../../drivers/mongoose/interfaces/projects/projects.interface'


@Injectable()
export class GetProjectService {


  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) { }
  // Get a single Project
  async getProject(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id);
    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    return project;
  }


}