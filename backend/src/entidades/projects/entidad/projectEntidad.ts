import { ApiProperty } from "@nestjs/swagger";

export class ProjectDto {
    @ApiProperty({type: String, maxLength: 25})
    shortTitle: string;
    @ApiProperty()
    mainTitle: string;
    @ApiProperty({required: false})
    description?: string;
    @ApiProperty({required: true})
    idPerfil: string;
    @ApiProperty({type : Array , "default" : []})
    media?: Array<string>;
   

}

export class MediaDto {
    readonly title: string
    readonly file: string
}

// Categoría del proyecto
// - Título corto (máximo 25 caracteres)
// - Título principal
// - Descripción
// - Biblioteca de medios (imágenes o videos)


