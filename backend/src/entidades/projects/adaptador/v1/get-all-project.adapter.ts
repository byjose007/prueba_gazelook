import { GetAllProjectService } from './../../caso_de_uso/v1/get-all-project.usecase';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('projects')
@Controller('api/v1/project')
export class GetAllProjectController {
  constructor(private readonly projectService: GetAllProjectService) { }
  foto: any;

    // Get Projects /projects
    @Get('/all')
    async getProjects(@Res() res) {
        const projects = await this.projectService.getProjects();
        return res.status(HttpStatus.OK).json(projects);
    }
  
}
