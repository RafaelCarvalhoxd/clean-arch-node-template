import { User } from '@domain/entities/user/user.entity';
import { UserModel } from '@infra/config/db/prisma/generated';

export class UserMapper {
  static toEntity(user: UserModel): User {
    return new User(
      user.id,
      user.name,
      user.email,
      user.password,
      user.createdAt,
      user.updatedAt
    );
  }
}
