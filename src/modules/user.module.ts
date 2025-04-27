import { Module } from '@nestjs/common';
import { UserController } from '../infrastructure/presenters/controllers/user.controller';
import { PrismaModule } from './prisma.module';
import { UserService } from 'src/application/services/user.service';
import { UserRepository } from '../infrastructure/repository/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: 'IUserRepository', useClass: UserRepository },
  ],
})
export class UserModule {}
