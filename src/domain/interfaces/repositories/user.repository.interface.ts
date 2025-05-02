import { User } from 'src/domain/entities/users.entity';

export interface IUserRepository {
  addUser(dto: any): Promise<User>;
  findUserById(userId: String): Promise<User | null>;
  findUserByEmail(email: String): Promise<User | null>;
  updateUser(id: String, data: User): Promise<User>;
  deleteUser(Id: String): Boolean;
}
