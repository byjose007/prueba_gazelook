import { ProjectDto } from './../../entidad/projectEntidad';
import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from '../../../../drivers/mongoose/interfaces/projects/projects.interface'


@Injectable()
export class CreateProjectService {


  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) { }

  // Post a single project
  async createProject(createProjectDTO: ProjectDto): Promise<Project> { 
 
    const project = new this.projectModel(createProjectDTO);
    return project.save();
  }

  }
