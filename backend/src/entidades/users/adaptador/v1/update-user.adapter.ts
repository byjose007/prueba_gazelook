import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Put, Body, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserService } from '../../caso_de_uso/v1/update-user.usecase';
import { UserDto } from '../../entidad/usersEntidad';



@ApiTags('users')
@Controller('api/v1/user')
export class UpdateUserController {
  constructor(private readonly userService: UpdateUserService) { }


  //   // Update User: /update?id=5c9d45e705ea4843c8d0e8f7
  @Put('/update')
  async updateUser(@Res() res, @Body() createUserDTO: UserDto, @Query('id') id: string) {
    const updatedUser = await this.userService.updateUser(id, createUserDTO);
    if (!updatedUser) { throw new NotFoundException('User does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'User Updated Successfully',
      updatedUser,
    });
  }


}
