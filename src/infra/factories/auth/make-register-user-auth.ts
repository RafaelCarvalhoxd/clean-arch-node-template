import { RegisterUserAuthService } from '@application/services/auth/register-user-auth.service';
import { RegisterUserUseCase } from '@domain/usecases/auth/register-user-auth.usecase';
import { BcryptLibAdapter } from '@infra/adapters/libs/bcrypt/bcrypt-lib.adapter';
import { UserRepositoryAdapter } from '@infra/adapters/repository/user/user-repository.adapter';
import { RegisterUserAuthController } from '@presentation/controller/auth/register-user-auth.controller';

export const makeRegisterUserAuth = (): RegisterUserAuthController =>
  new RegisterUserAuthController(
    new RegisterUserAuthService(
      new RegisterUserUseCase(
        new UserRepositoryAdapter(),
        new BcryptLibAdapter()
      )
    )
  );
