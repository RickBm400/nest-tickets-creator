import { Controller, Get, Post, Req, Body, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDTO, userLoginDTO } from 'src/users/users.dto';
import { UserService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private UserService: UserService,
    private AuthService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() userLoginDTO: userLoginDTO, @Res() res: Response) {
    try {
      const user = await this.UserService.User({ email: userLoginDTO.email });
      if (!user) {
        return res.status(401).json({ message: "Error: User doen't exists" });
      }

      const mathPassword = await this.AuthService.validatePassword(
        userLoginDTO.password,
        user.password,
      );

      if (!mathPassword) {
        return res.status(401).json({ message: 'Incorrect Password' });
      }

      const { email, user_type, id } = user;

      res.status(200).json({
        message: 'User logged successfully',
        access_token: await this.AuthService.handleJWT({
          email,
          user_type,
          id,
        }),
      });
    } catch (error) {
      res.status(401).json({
        message: 'Incorrect user credentials',
      });
    }
  }

  @Post('sign-up')
  async signUp(@Body() createUserDTO: CreateUserDTO, @Res() res: Response) {
    try {
      const userExist = await this.UserService.User({
        email: createUserDTO.email,
      });
      if (userExist) {
        return res
          .status(400)
          .json({ message: 'Error: this email already exists' });
      }

      const passwordHash = await this.AuthService.hashPassword(
        createUserDTO.password,
      );

      const newUser = await this.UserService.createUser({
        ...createUserDTO,
        password: passwordHash,
      });

      return res.status(201).json({
        message: 'User signed up successfully',
        user: newUser,
      });
    } catch (error) {
      console.error('Error during sign-up:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
