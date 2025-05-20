import { User } from 'src/domain/entities/users.entity';

export interface IUserRepository {
  addUser(dto: any): Promise<User>;
  findUserById(userId: string): Promise<User | null>;
  findUserByEmail(email: string): Promise<User | null>;
  updateUser(id: string, data: User): Promise<User>;
  deleteUser(Id: string): boolean;
}
