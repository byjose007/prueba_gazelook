
import { Controller, Get, Param, Res, HttpStatus, NotFoundException, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteUserService } from '../../caso_de_uso/v1/delete-user.usecase';



@ApiTags('users')
@Controller('api/v1/user')
export class DeleteUserController {
  constructor(private readonly userService: DeleteUserService) { }

  // Delete User: /delete?id=5c9d45e705ea4843c8d0e8f7
  @Delete('/delete')
  async deleteUser(@Res() res, @Query('id') id: string) {
    const userDeleted = await this.userService.deleteUser(id);
    if (!userDeleted) { throw new NotFoundException('User does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Successfully',
      userDeleted,
    });
  }


}
