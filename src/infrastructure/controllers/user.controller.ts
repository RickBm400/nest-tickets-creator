import { Controller, Get, Post, Patch, Query, Body } from '@nestjs/common';
import { NewUserDTO } from 'src/infrastructure/dtos/users.dto';

@Controller('Users')
export class UserController {
  constructor() {}

  @Get()
  findUser(@Query('userId') userId: String) {}

  @Post()
  createNewUser(@Body() newUserDTO: NewUserDTO) {}
}
