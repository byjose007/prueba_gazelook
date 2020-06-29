import { ApiProperty } from "@nestjs/swagger";

export class ProfileDto {
    @ApiProperty({required: false})
    album?: string;
    @ApiProperty({required: true})
    contactName: string;
    @ApiProperty({required: false})
    fullName?: string;
    @ApiProperty({required: false})
    telephone?: string;
    @ApiProperty({required: true})
    country?: string;
    @ApiProperty({required: true})
    location: string;
    @ApiProperty({required: true})
    postlCode: string;

}



