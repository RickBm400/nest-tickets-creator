import { UserType } from 'src/domain/entities/users.entity';

export interface NewUserDTO {
  name: String;
  user_name: String;
  email: String;
  user_role: UserType;
}
