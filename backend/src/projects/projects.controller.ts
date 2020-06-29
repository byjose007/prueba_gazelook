import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile, NotFoundException, ValidationPipe } from '@nestjs/common';
import { diskStorage } from 'multer';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto/projects-dto';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { Project } from './interfaces/projects.interface';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import * as multerGoogleStorage from 'multer-google-storage';

@ApiTags('projects')
@Controller('api/project')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) { }
    foto: any;

    // Add Project: /projects/create 
    @Post('/create')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    // upload files google storage
    @UseInterceptors(AnyFilesInterceptor({
        storage: multerGoogleStorage.storageEngine({
            projectId: 'singular-backup-281802',
            keyFilename: 'singular-backup-281802.iam.gserviceaccount.com',
            bucket: 'prueba_gazelook',
            filename: (req, file, cb) => { return cb(null, new Date().toISOString() + file.originalname) }
        })
    }))
    async createProject(@UploadedFile() file, @Res() res, @Body() createProjectDTO: ProjectDto) {
        const project = await this.projectService.createProject(createProjectDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Project Successfully Created',
            project,
        });
    }

    // Get Projects /projects
    @Get('/all')
    async getProjects(@Res() res) {
        const projects = await this.projectService.getProjects();
        return res.status(HttpStatus.OK).json(projects);
    }

    // GET single project: /projects/5c9d46100e2e5c44c444b2d1
    @Get('/:id')
    async getProject(@Res() res, @Param('id') id: string) {
        const project = await this.projectService.getProject(id);
        if (!project) { throw new NotFoundException('Project does not exist!'); }
        return res.status(HttpStatus.OK).json(project);
    }

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

    // Update Project: /update?id=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateProject(@Res() res, @Body() createProjectDTO: ProjectDto, @Query('id') id: string) {
        const updatedProject = await this.projectService.updateProject(id, createProjectDTO);
        if (!updatedProject) { throw new NotFoundException('Project does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Project Updated Successfully',
            updatedProject,
        });
    }


    // Upload files local
    // @Post('/uploadLocal')
    // @UseInterceptors(AnyFilesInterceptor({
    //     storage: diskStorage({
    //         destination: './uploads/',
    //         filename: (req, file, cb) => { return cb(null, new Date().toISOString() + file.originalname) }
    //     })
    // }))
    // save(@UploadedFile() file) {
    //     console.log(file, 'files');
    //     return;
    // }






}
