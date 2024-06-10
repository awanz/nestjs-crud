import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async getUsers() {
        try {
            const users = await this.userService.findUsers();
            return {
                status: HttpStatus.OK,
                message: 'List users',
                data: users,
            };
        } catch (error) {
            console.error('Error deleting user:', error);
            throw new HttpException('Error Create user', HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async createuser(@Body() createuserDto: CreateUserDto) {
        try {
            await this.userService.createUser(createuserDto);
            return {
                status: HttpStatus.OK,
                message: 'User created successfully',
            };
        } catch (error) {
            console.error('Error deleting user:', error);
            throw new HttpException('Error Create user', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':username')
    async updateUserById(
        @Param('username') username: string,
        @Body() updateUserDto: UpdateUserDto
    ) {
        try {
            await this.userService.updateUser(username, updateUserDto);
            return {
                status: HttpStatus.OK,
                message: 'User updated successfully',
            };
        } catch (error) {
            console.error('Error deleting user:', error);
            throw new HttpException('Error update user', HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':username')
    async deleteUserById(@Param('username') username: string) {
        try {
            await this.userService.deleteUser(username);
            return {
                status: HttpStatus.OK,
                message: 'User deleted successfully',
            };
        } catch (error) {
            console.error('Error deleting user:', error);
            throw new HttpException('Error deleting user', HttpStatus.BAD_REQUEST);
        }
    }
}

