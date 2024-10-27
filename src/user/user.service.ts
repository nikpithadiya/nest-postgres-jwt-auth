import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Hello World!';
  }

  addUser() : string {
    return 'hello world'
  }

  updateUser() {

  }

  deleteUser() {

  }
}
