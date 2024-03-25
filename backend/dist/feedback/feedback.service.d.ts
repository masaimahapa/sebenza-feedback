import { FeedbackDto, UpdateFeedbackDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FeedbackService {
    private prisma;
    constructor(prisma: PrismaService);
    createFeedback(dto: FeedbackDto): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    getFeedback(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    updateFeedback(id: number, updateDto: UpdateFeedbackDto): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    deleteFeedback(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    getAllFeedback(): Promise<{
        id: number;
        title: string;
        description: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }[]>;
}
