import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as Bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly bcrypt: typeof Bcrypt,
  ) {}

  async signIn() {}

  async generateJWT(payload: any) {
    return this.jwtService.sign(payload);
  }

  async hashPassword(password: string) {
    const _salt = this.configService.get<number>('BCRYPT_SALT');
    if (!_salt) {
      throw new InternalServerErrorException();
    }
    return await this.bcrypt.hash(password, _salt);
  }

  async validatePassword(password: string, hash: string) {
    return await this.bcrypt.compare(password, hash);
  }
}
