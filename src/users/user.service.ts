import { Injectable } from '@nestjs/common';

@Injectable()
export class User {
  private _id: string;
  name: string;
  nick_name: string;
}
