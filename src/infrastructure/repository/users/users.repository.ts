import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/users.entity';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';
import { UsersBaseRepository } from './users-baserepository';
import { NewUserDTO } from 'src/infrastructure/presenters/dtos/users.dto';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';

@Injectable()
export class UserRepository
  extends UsersBaseRepository
  implements IUserRepository
{
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async addUser(dto: NewUserDTO): Promise<User> {
    const _user = await this.prisma.users.create({ data: dto });
    return this.toLocalModule(_user);
  }
  findUserById(userId: String): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  findUserByEmail(email: String): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  updateUser(id: String, data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(Id: String): Boolean {
    throw new Error('Method not implemented.');
  }
}
