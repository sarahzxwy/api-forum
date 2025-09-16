import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post()
    async signupUser(
        @Body(new ValidationPipe()) createUserDto: CreateUserDto,
    ): Promise<UserModel> {
        return this.userService.createUser(createUserDto);
    }

    @Get(':id')
    async user(@Param('id') id: string): Promise<UserModel | null> {
        return this.userService.user({ id: Number(id)});
    }

    @Patch(':id')
    async updateUser(
    @Param('id') id: string,
    @Body(new ValidationPipe()) userData: UpdateUserDto,
    ): Promise<UserModel> {
        return this.userService.updateUser({ 
            where: { id: Number(id)}, 
            data: userData 
        });
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<UserModel> {
        return this.userService.deleteUser({ id: Number(id) });
    }
}
