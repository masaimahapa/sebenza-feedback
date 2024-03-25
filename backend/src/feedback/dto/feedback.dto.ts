import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FeedbackDto {
    @IsString()
    title: string;
    @IsString()
    description: string;
    @IsString()
    @IsOptional()
    status?: string;
    
    @IsNumber()
    user_id: number;
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
    status?: string;

    @IsOptional()
    user_id: number;

}