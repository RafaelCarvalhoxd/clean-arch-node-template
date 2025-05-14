export function validateEnvVariable(
  value: string | undefined,
  envVarName: string
): string {
  if (value === undefined || value === '' || value === 'undefined') {
    throw new Error(
      `Environment variable ${envVarName} is not defined or invalid`
    );
  }
  return value;
}
