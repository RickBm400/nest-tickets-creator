import { userStatus } from '@prisma/client';

export enum UserType {
  ADMINISTRATOR = 'ADMINISTRATOR',
  USER = 'USER',
  STAFF = 'STAFF',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export class User {
  id: string;
  name: string;
  user_name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  phone_number: string;
  status: UserStatus = UserStatus.ACTIVE;
  user_type: UserType = UserType.USER;
  password: string;

  constructor(init: Partial<User>) {
    Object.assign(this, init);
  }

  isAdministrator(): boolean {
    return [UserType.ADMINISTRATOR].includes(this.user_type);
  }

  isUser(): boolean {
    return [UserType.USER].includes(this.user_type);
  }
}
