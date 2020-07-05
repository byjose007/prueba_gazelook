import { GetAllUserService } from './../../caso_de_uso/v1/get-all-user.usecase';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('users')
@Controller('api/v1/user')
export class GetAllUserController {
  constructor(private readonly userService: GetAllUserService) { }
  foto: any;

    // Get Users /users
    @Get('/all')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }
  
}
