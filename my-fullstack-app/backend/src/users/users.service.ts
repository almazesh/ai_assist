import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com' },
    { id: 2, name: 'Мария Петрова', email: 'maria@example.com' },
  ];

  create(createUserDto: CreateUserDto): User {
    const newUser = {
      id: Math.max(...this.users.map(u => u.id)) + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  remove(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
