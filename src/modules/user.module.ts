import { Module } from '@nestjs/common';
import { UserController } from '../infrastructure/presenters/controllers/user.controller';
import { UserService } from 'src/application/services/user.service';
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
