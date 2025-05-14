import { BadRequestError } from '@domain/errors/bad-request.error';
import { IRequestDto } from '@domain/interfaces/common/request-dto.interface';
import { ValidationError } from '@domain/types/validation-error.type';
import { isValidEmail } from '@domain/utils/valid-email.util';

export class LoginUserAuthRequestDto implements IRequestDto {
  constructor(
    public email: string,
    public password: string
  ) {}

  validate(): this | Error {
    const errors: ValidationError[] = [];

    if (!this.email) {
      errors.push({ field: 'email', message: 'Email is required' });
    }

    if (this.email && typeof this.email !== 'string') {
      errors.push({ field: 'email', message: 'Email must be a string' });
    }

    if (isValidEmail(this.email) === false) {
      errors.push({ field: 'email', message: 'Email is invalid' });
    }

    if (!this.password) {
      errors.push({ field: 'password', message: 'Password is required' });
    }

    if (this.password && typeof this.password !== 'string') {
      errors.push({ field: 'password', message: 'Password must be a string' });
    }

    if (errors.length > 0) {
      throw new BadRequestError(JSON.stringify(errors));
    }

    return this;
  }
}
