import { Test } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/users/users.dto';

describe('AuthController', () => {
  let _authController: AuthController;
  let _authService: AuthService;

  beforeEach(async () => {
    const authModuleRef = await Test.createTestingModule({
      imports: [
        UsersModule,
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '1d' },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    _authController = authModuleRef.get<AuthController>(AuthController);
    _authService = authModuleRef.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should define the auth controller', () => {
      expect(_authController).toBeDefined();
    });

    it('shoult login users', () => {
      const user: CreateUserDTO = {
        email: 'rjbm29@gmail.com',
        nick_name: 'test_test',
        password: 'hashed_password',
        user_name: 'alans',
      };
    });
  });
});
