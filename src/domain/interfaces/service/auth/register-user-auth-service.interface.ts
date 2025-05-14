import { User } from '@domain/entities/user/user.entity';

export interface IRegisterUserAuthService {
  execute(input: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<User>;
}
