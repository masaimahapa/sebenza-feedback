import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { FeedbackDto, UpdateFeedbackDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}
  async createFeedback(dto: FeedbackDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: dto.user_id,
      },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const data = await this.prisma.feedback.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status,
        userId: user.id,
      },
    });
    return data;
  }

  async getFeedback(id: number) {
    const feedback = await this.prisma.feedback.findUnique({
      where: {
        id: id,
      },
    });
    if (!feedback) {
      throw new HttpException('Feedback not found', HttpStatus.NOT_FOUND);
    }
    return feedback;
  }

  async updateFeedback(id: number, updateDto: UpdateFeedbackDto) {
    const data = await this.prisma.feedback.update({
      where: {
        id: id,
      },
      data: updateDto,
    });
    return data;
  }

  async deleteFeedback(id: number) {
    const data = await this.prisma.feedback.delete({
      where: {
        id: id,
      },
    });
    return data;
  }

  async getAllFeedback() {
    const allFeeback = await this.prisma.feedback.findMany();
    if(!allFeeback) {
      return [];
    }
    return allFeeback;
  }
}
