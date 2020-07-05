
import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteProjectService } from '../../caso_de_uso/v1/delete-project.usecase';



@ApiTags('projects')
@Controller('api/v1/project')
export class DeleteProjectController {
  constructor(private readonly projectService: DeleteProjectService) { }

  // Delete Project: /delete?id=5c9d45e705ea4843c8d0e8f7
  @Delete('/delete')
  async deleteProject(@Res() res, @Query('id') id: string) {
    const projectDeleted = await this.projectService.deleteProject(id);
    if (!projectDeleted) { throw new NotFoundException('Project does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Project Deleted Successfully',
      projectDeleted,
    });
  }


}
