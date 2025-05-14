import { IJwtLib } from '@domain/interfaces/lib/jwt/jwt-lib.interface';
import { envConfig } from '@infra/config/env/env.config';
import jwt from 'jsonwebtoken';

export class JwtLibAdapter implements IJwtLib {
  constructor(private readonly secret = envConfig.jwtSecret) {}

  async sign(payload: object): Promise<string> {
    return new Promise((resolve, reject) =>
      jwt.sign(
        payload,
        this.secret,
        { algorithm: 'HS256', expiresIn: '1h' },
        (err, token) => {
          if (err || !token)
            return reject(err ?? new Error('Token não gerado'));
          resolve(token);
        }
      )
    );
  }

  async verify(token: string): Promise<unknown> {
    return new Promise((resolve, reject) =>
      jwt.verify(token, this.secret, (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded);
      })
    );
  }
}
