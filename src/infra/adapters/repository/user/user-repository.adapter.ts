import { User } from '@domain/entities/user/user.entity';
import { IUserRepository } from '@domain/interfaces/repository/user/user-repository.interface';
import { UserMapper } from '../mappers/user/user.mapper';
import { PrismaClient } from '@infra/config/db/prisma/generated';

const prisma = new PrismaClient();

export class UserRepositoryAdapter implements IUserRepository {
  async findUser(input: {
    id?: number;
    name?: string;
    email?: string;
  }): Promise<User | null> {
    const { id, name, email } = input;

    const user = await prisma.userModel.findFirst({
      where: {
        OR: [{ id }, { name }, { email }],
      },
    });

    if (!user) return null;

    return UserMapper.toEntity(user);
  }

  async createUser(input: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const { name, email, password } = input;

    const user = await prisma.userModel.create({
      data: {
        name,
        email,
        password,
      },
    });

    return UserMapper.toEntity(user);
  }
}
