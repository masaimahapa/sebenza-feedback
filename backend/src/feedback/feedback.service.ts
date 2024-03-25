import { Injectable } from '@nestjs/common';

import { FeedbackDto, UpdateFeedbackDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}
  async createFeedback(dto: FeedbackDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        cell_number: dto.cell_number,
      },
    });
    const data = await this.prisma.feedback.create({
      data: {
        title: dto.title,
        description: dto.description,
        cell_number: dto.cell_number,
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
    return allFeeback;
  }
}
