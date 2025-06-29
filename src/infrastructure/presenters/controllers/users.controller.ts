import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from 'src/application/services/users.service';
import {
  NewUserDTO,
  FindUserDto,
} from 'src/infrastructure/presenters/dtos/users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findUser(@Query('userId') userId: string) {
    return this.userService.findUserById(userId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createNewUser(@Body() newUserDTO: NewUserDTO) {
    return this.userService.createNewUser(newUserDTO);
  }
}
