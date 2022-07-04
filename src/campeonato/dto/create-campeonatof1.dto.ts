import { IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCampeonatoF1Dto {
    @IsString({ message: "O titulo deve ser uma string" })
    @MinLength(5, { message: "O titulo deve ter no minimo 5 caracteres" })
    @MaxLength(100, { message: "O titulo deve ter no maximo 100 caracteres" })
    titulo: string;

    @IsString({ message: "A descricao deve ser uma string" })
    @MaxLength(255, { message: "A descricao deve ter no maximo 255 caracteres" })
    @IsOptional()
    descricao: string;

    @IsOptional()
    @IsString({ message: "O icone deve ser uma string" })
    icone: string;

    @IsInt({ message: "A temporada deve ser um numero inteiro" })
    temporada: number;
}