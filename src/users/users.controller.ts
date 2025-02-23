import { Controller, Post, Get, Res, Body } from '@nestjs/common';
import { CreateUserDTO } from './users.dto';
import { Response } from 'express';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createNewUser(
    @Body() createUserDTO: CreateUserDTO,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const user = await this.userService.createUser(createUserDTO);
      res.status(201).json({
        message: 'User created successfully',
        user,
      });
    } catch (error) {
      console.error('Error creating user:', createUserDTO.email);
      res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  @Get()
  async findAllUsers(@Res() res: Response) {
    res.json({
      users: await this.userService.fetchAllUsers(),
    });
  }
}
