import { GetUserService } from './../entidades/users/caso_de_uso/v1/get-user.usecase';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(private readonly usersService: GetUserService, private readonly jwtService: JwtService) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);


    if(user.length == 0){
      console.log('0');
      return null;

    }else {
      console.log('1');
      if (user && user[0]['password'] === pass) {
        const { password, ...result } = user;
        return result;
      } 
    }
     
   
    
  }
  async login(user: any) {
    const payload = {
      email: user[0].email,
      language: user[0].language,
      id: user[0]._id,
    };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}