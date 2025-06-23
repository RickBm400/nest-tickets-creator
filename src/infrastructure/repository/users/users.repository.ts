import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User, UserStatus } from 'src/domain/entities/users.entity';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';
import { UsersBaseRepository } from './users-baserepository';
import { NewUserDTO } from 'src/infrastructure/presenters/dtos/users.dto';
import { LocalPrismaClient } from 'src/infrastructure/database/prisma/prisma.client';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class UserRepository
  extends UsersBaseRepository
  implements IUserRepository
{
  constructor(private readonly prisma: LocalPrismaClient) {
    super();
  }
  async addUser(dto: NewUserDTO): Promise<User> {
    try {
      const data: Prisma.UsersCreateInput = {
        ...dto,
        status: UserStatus.ACTIVE,
      };
      const _user = await this.prisma.users.create({ data });
      return this.toLocalModule(_user);
    } catch (error) {
      throw new ConflictException({
        message: 'Conflict inside documents',
        status: HttpStatus.CONFLICT,
      });
    }
  }

  async findUserById(userId: string): Promise<User | null> {
    const _user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!_user) {
      throw new NotFoundException();
    }

    return this.toLocalModule(_user);
  }
  findUserByEmail(email: String): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  updateUser(id: String, data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(Id: string): boolean {
    throw new Error('Method not implemented.');
  }
}
