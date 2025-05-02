import { User, UserStatus, UserType } from 'src/domain/entities/users.entity';
import { Prisma, Users as PrismaUser } from '@prisma/client';

export class UsersBaseRepository {
  async toLocalModule(_user: PrismaUser): Promise<User> {
    return new User({
      id: _user.id,
      name: _user.name,
      email: _user.email,
      created_at: _user.created_at,
      password: _user.password,
      phone_number: _user.phone_number,
      updated_at: _user.updated_at,
      user_name: _user.user_name,
      user_type: UserType[_user.user_type],
      status: UserStatus[_user.status],
    });
  }
}
