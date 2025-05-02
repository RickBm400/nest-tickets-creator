import { UserType, UserStatus } from 'src/domain/entities/users.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsIn,
} from 'class-validator';

export class NewUserDTO {
  @MinLength(10)
  @MaxLength(30)
  @IsString()
  name: string;

  @IsIn(Object.values(UserType))
  user_type: UserType;

  @IsString()
  user_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  phone_number: string;
}
