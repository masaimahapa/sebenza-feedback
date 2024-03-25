import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
    @IsString()
    cell_number: string;
}

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    cell_number: string;
}