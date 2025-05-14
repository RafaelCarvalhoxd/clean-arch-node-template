import { User } from '@domain/entities/user/user.entity';

export class UserResponseDto {
  public id: number;
  public name: string;
  public email: string;
  public createdAt: Date;
  public updatedAt: Date | null;

  constructor(
    id: number,
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date | null
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static toJson(data: User): UserResponseDto {
    return new UserResponseDto(
      data.getId(),
      data.getName(),
      data.getEmail(),
      data.getCreatedAt(),
      data.getUpdatedAt()
    );
  }
}
