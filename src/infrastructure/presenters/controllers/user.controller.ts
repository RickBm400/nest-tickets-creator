import { Controller, Get, Post, Patch, Query, Body } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service';
import { NewUserDTO } from 'src/infrastructure/presenters/dtos/users.dto';
import { User } from 'src/domain/entities/users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findUser(@Query('userId') userId: String) {}

  @Post()
  createNewUser(@Body() newUserDTO: NewUserDTO) {
    this.userService.createNewUser(newUserDTO);
  }
}
