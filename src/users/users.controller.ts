import { Controller, Get } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ){}

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}