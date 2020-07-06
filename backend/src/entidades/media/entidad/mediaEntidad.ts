import { ApiProperty } from "@nestjs/swagger";

export class MediaDto {
    @ApiProperty({required: true})
    idProject: string;
    @ApiProperty({required: true})
    title: string;
    @ApiProperty({required: false})
    fileUrl?: string;

   

}


