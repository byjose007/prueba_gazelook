
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import {Project} from '../../../../drivers/mongoose/interfaces/Projects/Projects.interface'


@Injectable()
export class GetAllProjectService {


  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) { }
 
  // Get all Projects
  async getProjects(): Promise<Project[]> {
    const Projects = await this.projectModel.find();
    return Projects;
  }
}