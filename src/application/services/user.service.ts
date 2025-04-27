import { Inject } from '@nestjs/common';
import { User } from 'src/domain/entities/users.entity';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';

export class UserService {
  constructor(
    @Inject('IUserRepository') readonly userRepository: IUserRepository,
  ) {}

  async createNewUser(data: User) {
    return this.userRepository.createUser(data);
  }
}
