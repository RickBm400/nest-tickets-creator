import { UserType } from 'src/domain/entities/users.entity';

export interface NewUserDTO {
  id: string;
  user_type: UserType;
  name: string;
  user_name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
