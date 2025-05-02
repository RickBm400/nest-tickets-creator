import { Module } from '@nestjs/common';
import { UserController } from '../infrastructure/presenters/controllers/users.controller';
import { UserService } from 'src/application/services/users.service';
import { UserRepository } from '../infrastructure/repository/users/users.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: 'IUserRepository', useClass: UserRepository },
  ],
})
export class UserModule {}
