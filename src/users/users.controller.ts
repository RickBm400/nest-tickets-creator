import { Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';
@Controller('users')
export class UsersController {
  @Get()
  createNewUser(@Res() res: Response): any {
    res.json({
      message: 'user is signed up',
    });
  }
}
