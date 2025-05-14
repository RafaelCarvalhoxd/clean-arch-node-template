export class User {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date | null;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date | null
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getEmail(): string {
    return this._email;
  }

  public getPassword(): string {
    return this._password;
  }

  public getCreatedAt(): Date {
    return this._createdAt;
  }

  public getUpdatedAt(): Date | null {
    return this._updatedAt;
  }
}
