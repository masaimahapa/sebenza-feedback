import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto, UpdateUserDto } from "./dto";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async createUser(dto: CreateUserDto) {
        const data = await this.prisma.user.create({
            data: {
                name: dto.name,
                cell_number: dto.cell_number 
            }
        })

        return data;
    }

    async deleteUser(id: number) {
        const data =  await this.prisma.user.delete({
            where: {
                id: id
            }
        });

        return data;
    }

    async getAllUsers() {
        const allUsers= await this.prisma.user.findMany();
        return allUsers;
    }

    async getUser(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });

        if(!user) {
            throw new HttpException('User not found', 404);
        }

        return user;
    }

    async updateUser(id: number, updateDto: UpdateUserDto) {
        const data = await this.prisma.user.update({
            where: {
                id: id
            },
            data: updateDto
        })
        return data;
    }
}