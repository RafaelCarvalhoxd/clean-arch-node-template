import { BadRequestError } from '@domain/errors/bad-request.error';
import { IRequestDto } from '@domain/interfaces/common/request-dto.interface';
import { ValidationError } from '@domain/types/validation-error.type';
import { isValidEmail } from '@domain/utils/valid-email.util';

export class RegisterUserAuthRequestDto implements IRequestDto {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public confirmPassword: string
  ) {}
  validate(): this | Error {
    const errors: ValidationError[] = [];

    if (!this.name) {
      errors.push({ field: 'name', message: 'Name is required' });
    }

    if (this.name && typeof this.name !== 'string') {
      errors.push({ field: 'name', message: 'Name must be a string' });
    }

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

    if (!this.confirmPassword) {
      errors.push({
        field: 'confirmPassword',
        message: 'Confirm password is required',
      });
    }

    if (this.confirmPassword && typeof this.confirmPassword !== 'string') {
      errors.push({
        field: 'confirmPassword',
        message: 'Confirm password must be a string',
      });
    }

    if (errors.length > 0) {
      throw new BadRequestError(JSON.stringify(errors));
    }

    return this;
  }
}
