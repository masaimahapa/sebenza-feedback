import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDto): Promise<{
        id: number;
        name: string;
        cell_number: string;
    }>;
    deleteUser(id: number): Promise<{
        id: number;
        name: string;
        cell_number: string;
    }>;
    getAllUsers(): Promise<{
        id: number;
        name: string;
        cell_number: string;
    }[]>;
    getUser(id: number): Promise<{
        id: number;
        name: string;
        cell_number: string;
    }>;
    updateUser(id: number, updateDto: UpdateUserDto): Promise<{
        id: number;
        name: string;
        cell_number: string;
    }>;
}
