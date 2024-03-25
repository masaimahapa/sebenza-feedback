import { FeedbackService } from './feedback.service';
import { FeedbackDto, UpdateFeedbackDto } from './dto';
export declare class FeedbackController {
    private feedbackService;
    constructor(feedbackService: FeedbackService);
    createFeedback(dto: FeedbackDto): Promise<{
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
}
