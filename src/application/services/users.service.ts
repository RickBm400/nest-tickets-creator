import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interfaces/repositories/user.repository.interface';
import { NewUserDTO } from 'src/infrastructure/presenters/dtos/users.dto';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    private readonly authService: AuthService,
  ) {}

  async createNewUser(data: NewUserDTO) {
    const password = await this.authService.hashPassword(data.password);
    const _modifiedData = Object.assign(data, {
      password,
    });
    return this.userRepository.addUser(_modifiedData);
  }

  async findUserById(userId: string) {
    return this.userRepository.findUserById(userId);
  }
}
