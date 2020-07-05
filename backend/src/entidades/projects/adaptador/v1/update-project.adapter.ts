import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Put, Body, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateProjectService } from '../../caso_de_uso/v1/update-project.usecase';
import { ProjectDto } from '../../entidad/projectEntidad';



@ApiTags('projects')
@Controller('api/v1/project')
export class UpdateProjectController {
  constructor(private readonly projectService: UpdateProjectService) { }


  //   // Update Project: /update?id=5c9d45e705ea4843c8d0e8f7
  @Put('/update')
  async updateProject(@Res() res, @Body() createProjectDTO: ProjectDto, @Query('id') id: string) {
    const updatedProject = await this.projectService.updateProject(id, createProjectDTO);
    if (!updatedProject) { throw new NotFoundException('Project does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Project Updated Successfully',
      updatedProject,
    });
  }


}
