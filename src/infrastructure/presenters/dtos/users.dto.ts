import { UserType, UserStatus } from 'src/domain/entities/users.entity';
import { IsDate, IsEmail, IsHash, IsNotEmpty, IsString } from 'class-validator';

export class NewUserDTO {
  name: string;
  user_type: UserType;
  user_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  phone_number: string;
  status: UserStatus;
}
