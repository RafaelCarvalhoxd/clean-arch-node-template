import { BadRequestError } from '@domain/errors/bad-request.error';

export function validateExtraParameters(
  expectedFields: string[],
  body: object
): Error | null {
  const extraFields = Object.keys(body).filter(
    key => !expectedFields.includes(key)
  );

  if (extraFields.length > 0) {
    throw new BadRequestError(
      `Invalid parameter(s): ${extraFields.join(', ')}`
    );
  }

  return null;
}
