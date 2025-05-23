import { UserType, UserStatus } from 'src/domain/entities/users.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsIn,
  IsOptional,
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

  //create personalized validation
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  phone_number: string;
}

export class FindUserDto {
  @IsString()
  id: string;

  @IsEmail()
  @IsString()
  email: string;
}
