import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/users.entity';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  updateUser(id: String, data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  createNewUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findUserById(userId: String): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  findUserByEmail(email: String): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  deleteUser(Id: String): Boolean {
    throw new Error('Method not implemented.');
  }
}
