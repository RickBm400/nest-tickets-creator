import { User, UserStatus, UserType } from 'src/domain/entities/users.entity';
import { Prisma } from '@prisma/client';
export class UsersBaseRepository {
  async toLocalModule(_user: Prisma.UsersCreateInput | any): Promise<User> {
    return new User(_user);
  }
}
