import { User } from '@domain/entities/user/user.entity';
import { ConflictError } from '@domain/errors/conflict.error';
import { IBcryptLib } from '@domain/interfaces/lib/bcrypt/bcrypt-lib.interface';
import { IUserRepository } from '@domain/interfaces/repository/user/user-repository.interface';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly bcryptLib: IBcryptLib
  ) {}

  async execute(input: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<User> {
    const { name, email, password, confirmPassword } = input;
    if (password !== confirmPassword) {
      throw new ConflictError('Passwords do not match');
    }
    const existingUser = await this.userRepository.findUser({ email });
    if (existingUser) {
      throw new ConflictError('User email already exists');
    }
    const hashedPassword = await this.bcryptLib.hash({
      plainText: password,
      salt: 10,
    });
    return await this.userRepository.createUser({
      name,
      email,
      password: hashedPassword,
    });
  }
}
