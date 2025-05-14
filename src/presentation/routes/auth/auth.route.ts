import { LoginUserAuthRequestDto } from '@application/dto/request/auth/login-user-auth-request.dto';
import { RegisterUserAuthRequestDto } from '@application/dto/request/auth/register-user-auth-request.dto';
import { UserResponseDto } from '@application/dto/response/user/user-response.dto';
import { validateExtraParameters } from '@domain/utils/validate-extra-fields.util';
import { makeLoginUserAuth } from '@infra/factories/auth/make-login-user-auth';
import { makeRegisterUserAuth } from '@infra/factories/auth/make-register-user-auth';
import { NextFunction, Request, Response, Router } from 'express';

export const authRoutes = Router();

authRoutes.post(
  '/register',
  async function (
    req: Request<unknown, unknown, RegisterUserAuthRequestDto, unknown>,
    res: Response<UserResponseDto>,
    next: NextFunction
  ): Promise<void> {
    const controller = makeRegisterUserAuth();

    validateExtraParameters(
      ['email', 'password', 'name', 'confirmPassword'],
      req.body
    );

    const dto = new RegisterUserAuthRequestDto(
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.confirmPassword
    );

    dto.validate();

    controller
      .handle(dto)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        next(error);
      });
  }
);

authRoutes.post(
  '/login',
  async function (
    req: Request<unknown, unknown, LoginUserAuthRequestDto, unknown>,
    res: Response<{ token: string }>,
    next: NextFunction
  ): Promise<void> {
    const controller = makeLoginUserAuth();

    validateExtraParameters(['email', 'password'], req.body);

    const dto = new LoginUserAuthRequestDto(req.body.email, req.body.password);

    dto.validate();

    controller
      .handle(dto)
      .then(token => {
        res.status(200).json(token);
      })
      .catch(error => {
        next(error);
      });
  }
);
