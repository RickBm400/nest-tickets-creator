import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

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
}
