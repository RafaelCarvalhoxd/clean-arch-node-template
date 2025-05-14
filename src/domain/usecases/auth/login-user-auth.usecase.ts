import { User } from '@domain/entities/user/user.entity';
import { UnauthorizedError } from '@domain/errors/unauthorized.error';
import { IBcryptLib } from '@domain/interfaces/lib/bcrypt/bcrypt-lib.interface';
import { IJwtLib } from '@domain/interfaces/lib/jwt/jwt-lib.interface';

export class LoginUserAuthUseCase {
  constructor(
    private readonly bcryptLib: IBcryptLib,
    private readonly jwtLib: IJwtLib
  ) {}

  async execute(input: {
    password: string;
    user: User;
  }): Promise<{ token: string }> {
    const { password, user } = input;
    const isPasswordValid = await this.bcryptLib.compare({
      plainText: password,
      hashedText: user.getPassword(),
    });
    if (!isPasswordValid) {
      throw new UnauthorizedError('Invalid password!');
    }
    const token = await this.jwtLib.sign({
      id: user.getId(),
      name: user.getName(),
    });
    return { token };
  }
}
