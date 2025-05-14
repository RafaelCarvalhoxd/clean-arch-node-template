import { IBcryptLib } from '@domain/interfaces/lib/bcrypt/bcrypt-lib.interface';
import bcrypt from 'bcrypt';

export class BcryptLibAdapter implements IBcryptLib {
  async compare(input: {
    plainText: string;
    hashedText: string;
  }): Promise<boolean> {
    return bcrypt.compare(input.plainText, input.hashedText);
  }

  async hash(input: { plainText: string; salt: number }): Promise<string> {
    return bcrypt.hash(input.plainText, input.salt);
  }
}
