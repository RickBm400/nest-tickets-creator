import { PrismaService } from '../../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from 'src/domain/entities/users.entity';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';
import { UsersBaseRepository } from './users-baserepository';
import { NewUserDTO } from 'src/infrastructure/presenters/dtos/users.dto';

@Injectable()
export class UserRepository
  extends UsersBaseRepository
  implements IUserRepository
{
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async addUser(dto: NewUserDTO): Promise<User> {
    let data: Prisma.UsersCreateInput = {
      ...dto,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const _user = await this.prisma.users.create({ data });
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
