import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FeedbackDto {
    @IsString()
    title: string;
    @IsString()
    description: string;
    @IsString()
    @IsNotEmpty()
    cell_number: string;
    @IsString()
    status?: string;
}

export class UpdateFeedbackDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    cell_number?: string;

    @IsString()
    @IsOptional()
    status?: string;
}