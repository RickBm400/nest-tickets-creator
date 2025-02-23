import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Users, Prisma } from '@prisma/client';
import { UserListDTO } from './users.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async User(
    userWhereUnique: Prisma.UsersWhereUniqueInput,
  ): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: userWhereUnique,
    });
  }

  async fetchAllUsers(): Promise<UserListDTO[]> {
    return this.prisma.users.findMany({
      select: {
        id: true,
        user_name: true,
        nick_name: true,
        email: true,
      },
    });
  }

  async createUser(data: Prisma.UsersCreateInput): Promise<Users> {
    return this.prisma.users.create({
      data,
    });
  }
}
