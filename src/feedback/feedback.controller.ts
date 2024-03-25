import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackDto, UpdateFeedbackDto } from './dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  createFeedback(@Body() dto: FeedbackDto) {
    return this.feedbackService.createFeedback(dto);
  }

  @Delete(':id')
  deleteFeedback(@Param('id', ParseIntPipe) id: number) {
    return this.feedbackService.deleteFeedback(id);
  }

  @Get()
  getAllFeedback() {
    return this.feedbackService.getAllFeedback();
  }

  @Get(':id')
  getFeedback(@Param('id', ParseIntPipe) id: number) {
    return this.feedbackService.getFeedback(id);
  }

  @Patch(':id')
  updateFeedback(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateFeedbackDto,
  ) {
    return this.feedbackService.updateFeedback(id, updateDto);
  }
}
