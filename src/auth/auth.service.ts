import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { userJwtPayload } from 'src/users/users.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async hashSalt(): Promise<string> {
    return await bcrypt.genSalt(10);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await this.hashSalt();
    return await bcrypt.hash(password, salt);
  }

  async validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async handleJWT(payload: userJwtPayload): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }
}
