// model Users {
//   id String @id @default(uuid())
//   user_type userTypes @default(MEMBER)
//   user_name String
//   email String @unique
//   password String
//   nick_name String?
//   created_at DateTime @default(now())
//   updated_at DateTime @updatedAt
// }

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

export interface userJwtPayload {
  email: string;
  user_type: string;
  id: string;
}
