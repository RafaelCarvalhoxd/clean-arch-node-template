import { User } from '@domain/entities/user/user.entity';
import { IRegisterUserAuthService } from '@domain/interfaces/service/auth/register-user-auth-service.interface';
import { RegisterUserUseCase } from '@domain/usecases/auth/register-user-auth.usecase';

export class RegisterUserAuthService implements IRegisterUserAuthService {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  async execute(input: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<User> {
    const { name, email, password, confirmPassword } = input;
    return await this.registerUserUseCase.execute({
      name,
      email,
      password,
      confirmPassword,
    });
  }
}
