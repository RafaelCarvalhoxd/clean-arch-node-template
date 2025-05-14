import { User } from '@domain/entities/user/user.entity';

export interface IUserRepository {
  findUser(input: {
    id?: number;
    name?: string;
    email?: string;
  }): Promise<User | null>;

  createUser(input: {
    name: string;
    email: string;
    password: string;
  }): Promise<User>;
}
