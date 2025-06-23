import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as Bcrypt from 'bcrypt';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AuthService {
  private env = process.env;
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateJWT(payload: any) {
    return this.jwtService.signAsync(payload);
  }

  async hashPassword(password: string) {
    const saltRounds = Number(this.configService.get<string>('BCRYPT_SALT'));
    const _salt = await Bcrypt.genSalt(saltRounds);
    if (!_salt) {
      throw new InternalServerErrorException();
    }
    return await Bcrypt.hash(password, _salt);
  }

  async validatePassword(password: string, hash: string) {
    return await Bcrypt.compare(password, hash);
  }
}
