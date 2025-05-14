import { LoginUserAuthService } from '@application/services/auth/login-user-auth.service';
import { LoginUserAuthUseCase } from '@domain/usecases/auth/login-user-auth.usecase';
import { FindUserUseCase } from '@domain/usecases/user/find-user.usecase';
import { BcryptLibAdapter } from '@infra/adapters/libs/bcrypt/bcrypt-lib.adapter';
import { JwtLibAdapter } from '@infra/adapters/libs/jwt/jwt-lib.adapter';
import { UserRepositoryAdapter } from '@infra/adapters/repository/user/user-repository.adapter';
import { LoginUserAuthController } from '@presentation/controller/auth/login-user-auth.controller';

export const makeLoginUserAuth = (): LoginUserAuthController =>
  new LoginUserAuthController(
    new LoginUserAuthService(
      new FindUserUseCase(new UserRepositoryAdapter()),
      new LoginUserAuthUseCase(new BcryptLibAdapter(), new JwtLibAdapter())
    )
  );
