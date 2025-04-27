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
  constructor(
    public id: string,
    public name: string,
    public user_name: string,
    public email: string,
    public created_at: Date,
    public updated_at: Date,
    public phone_number: string,
    public status: UserStatus = UserStatus.ACTIVE,
    public user_type: UserType = UserType.USER,
    public password: string,
  ) {}

  isAdministrator(): boolean {
    return [UserType.ADMINISTRATOR].includes(this.user_type);
  }

  isUser(): boolean {
    return [UserType.USER].includes(this.user_type);
  }
}
