import { CreateProjectService } from './../../caso_de_uso/v1/create-project.usecase';
import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe } from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectDto } from '../../entidad/projectEntidad';



@ApiTags('projects')
@Controller('api/v1/project')
export class CreateProjectController {
  constructor(private readonly projectService: CreateProjectService) { }
  // Add Project: /projects/create
  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createProject(@Res() res, @Body() createProjectDTO: ProjectDto) {
      const project = await this.projectService.createProject(createProjectDTO);
      return res.status(HttpStatus.OK).json({
          message: 'Project Successfully Created',
          project,
      });
  }
  
}
