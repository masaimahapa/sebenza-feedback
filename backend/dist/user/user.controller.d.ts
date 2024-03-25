import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
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
