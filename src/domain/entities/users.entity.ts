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
  _id: String;
  name: String;
  user_name: String;
  email: String;
  createdAt: Date;
  updatedAt: Date;
  phone_number: String;
  status: String;
  user_role: UserType;
  private password: String;

  constructor(init: Partial<User>) {
    Object.assign(this, init);
  }

  isAdministrator(): boolean {
    return [UserType.ADMINISTRATOR].includes(this.user_role);
  }

  isUser(): boolean {
    return [UserType.USER].includes(this.user_role);
  }
}
