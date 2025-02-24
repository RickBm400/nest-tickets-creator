export class CreateUserDTO {
  user_name: string;
  nick_name: string;
  email: string;
  password: string;
}

export class UserListDTO {
  id: string;
  user_name: string;
  nick_name: string | null;
  email: string;
}

export interface userLoginDTO {
  email: string;
  password: string;
}
