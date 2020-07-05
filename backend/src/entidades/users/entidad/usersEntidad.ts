import { ApiProperty } from "@nestjs/swagger";

export enum Language {
    Ingles = 'Ingles',
    Español = 'Español'
}


export class UserDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty({enum: Language, enumName: 'Languege' })
    language: Language;
   

}



