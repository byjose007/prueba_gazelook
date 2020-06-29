import { Inject, Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Project } from './interfaces/projects.interface';
import { ProjectDto } from './dto/projects-dto';
import { InjectModel } from '@nestjs/mongoose';





@Injectable()
export class ProjectsService {


  constructor(@InjectModel('Projects') private readonly userModel: Model<Project>) { }
 
    // Post a single user
    async createProject(createProjectDTO: ProjectDto): Promise<Project> {
 
      const profile = new this.userModel(createProjectDTO);
      return profile.save();
    }

  // Get all projects
  async getProjects(): Promise<Project[]> {
    const projects = await this.userModel.find();
    return projects;
  }

  // Get a single Project
  async getProject(id: string): Promise<Project> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }


  // Delete Project
  async deleteProject(id: string): Promise<any> {
    const deleteProject = await this.userModel.findByIdAndDelete(id);
    return deleteProject;
  }

  // Put a single user
  async updateProject(id: string, updateProjectDto: any): Promise<Project> {
    const updateProject = await this.userModel.findByIdAndUpdate(id, updateProjectDto, { new: true });
    return updateProject;
  }

 


}