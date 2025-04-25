import { User } from 'src/domain/entities/users.entity';

export interface IUserRepository {
  findUserById(userId: String): Promise<User | null>;
  findUserByEmail(email: String): Promise<User | null>;
}
