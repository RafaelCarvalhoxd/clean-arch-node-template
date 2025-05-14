import { User } from '@domain/entities/user/user.entity';
import { NotFoundError } from '@domain/errors/not-found.error';
import { IUserRepository } from '@domain/interfaces/repository/user/user-repository.interface';

export class FindUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(input: {
    id?: number;
    name?: string;
    email?: string;
  }): Promise<User> {
    const { id, name, email } = input;

    const user = await this.userRepository.findUser({
      id,
      name,
      email,
    });

    if (!user) {
      throw new NotFoundError('User not found!');
    }

    return user;
  }
}
