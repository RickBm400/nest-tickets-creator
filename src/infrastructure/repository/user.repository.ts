import { PrismaService } from '../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, userTypes } from '@prisma/client';
import { User, UserStatus, UserType } from 'src/domain/entities/users.entity';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';
import { NewUserDTO } from '../presenters/dtos/users.dto';
import { _isLuhnAlgo } from 'valibot';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(userData: User): Promise<User> {
    let data: Prisma.UsersCreateInput = {
      name: userData.name,
      user_name: userData.user_name,
      email: userData.email,
      phone_number: userData.phone_number,
      status: userData.status,
      user_type: userData.user_type ?? UserType.USER,
      password: userData.password,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const _user = await this.prisma.users.create({ data });
    return new User(
      _user.id,
      _user.name,
      _user.user_name,
      _user.email,
      _user.created_at,
      _user.updated_at,
      _user.phone_number,
      UserStatus[_user.status],
      UserType[_user.user_type],
      _user.password,
    );
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
