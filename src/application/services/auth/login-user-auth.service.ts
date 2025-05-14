import { ILoginUserAuthService } from '@domain/interfaces/service/auth/login-user-auth-service.interface';
import { LoginUserAuthUseCase } from '@domain/usecases/auth/login-user-auth.usecase';
import { FindUserUseCase } from '@domain/usecases/user/find-user.usecase';

export class LoginUserAuthService implements ILoginUserAuthService {
  constructor(
    private readonly findUserUseCase: FindUserUseCase,
    private readonly loginUserUseCase: LoginUserAuthUseCase
  ) {}

  async execute(input: {
    email: string;
    password: string;
  }): Promise<{ token: string }> {
    const { email, password } = input;
    const user = await this.findUserUseCase.execute({ email });
    return await this.loginUserUseCase.execute({ user, password });
  }
}
