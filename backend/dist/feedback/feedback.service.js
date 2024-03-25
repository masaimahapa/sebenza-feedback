"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FeedbackService = class FeedbackService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createFeedback(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: dto.user_id,
            },
        });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
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
    async getFeedback(id) {
        const feedback = await this.prisma.feedback.findUnique({
            where: {
                id: id,
            },
        });
        if (!feedback) {
            throw new common_1.HttpException('Feedback not found', common_1.HttpStatus.NOT_FOUND);
        }
        return feedback;
    }
    async updateFeedback(id, updateDto) {
        const data = await this.prisma.feedback.update({
            where: {
                id: id,
            },
            data: updateDto,
        });
        return data;
    }
    async deleteFeedback(id) {
        const data = await this.prisma.feedback.delete({
            where: {
                id: id,
            },
        });
        return data;
    }
    async getAllFeedback() {
        const allFeeback = await this.prisma.feedback.findMany();
        if (!allFeeback) {
            return [];
        }
        return allFeeback;
    }
};
exports.FeedbackService = FeedbackService;
exports.FeedbackService = FeedbackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FeedbackService);
//# sourceMappingURL=feedback.service.js.map