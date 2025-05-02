import { Inject } from '@nestjs/common';
import { User } from 'src/domain/entities/users.entity';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';
import { NewUserDTO } from 'src/infrastructure/presenters/dtos/users.dto';

export class UserService {
  constructor(
    @Inject('IUserRepository') readonly userRepository: IUserRepository,
  ) {}

  async createNewUser(data: NewUserDTO) {
    return this.userRepository.addUser(data);
  }
}
