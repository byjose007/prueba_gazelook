import { GetUserService } from './../../caso_de_uso/v1/get-user.usecase';
import { Controller, Get,  Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';



import { ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('users')
@Controller('api/v1/user')
export class GetUserController {
  constructor(private readonly userService: GetUserService) { }

  // GET single user: /users/5c9d46100e2e5c44c444b2d1
  @Get('/:id')
  async getUser(@Res() res, @Param('id') id: string) {
    const user = await this.userService.getUser(id);
    if (!user) { throw new NotFoundException('User does not exist!'); }
    return res.status(HttpStatus.OK).json(user);
  }


}
