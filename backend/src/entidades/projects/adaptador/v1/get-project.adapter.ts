import { GetProjectService } from './../../caso_de_uso/v1/get-project.usecase';
import { Controller, Get,  Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';



import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('projects')
@Controller('api/v1/project')
export class GetProjectController {
  constructor(private readonly projectService: GetProjectService) { }

  // GET single project: /projects/5c9d46100e2e5c44c444b2d1
  @Get('/:id')
  async getProject(@Res() res, @Param('id') id: string) {
    const project = await this.projectService.getProject(id);
    if (!project) { throw new NotFoundException('Project does not exist!'); }
    return res.status(HttpStatus.OK).json(project);
  }


}
