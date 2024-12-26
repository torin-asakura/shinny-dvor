export const getCheckEnvsErrorMessage = (applicationName: string, envName: string): string =>
  `Error on ${applicationName}, globals, data, check-envs-helper: ${envName} needed`

export class CheckEnvsError extends Error {
  constructor(applicationName: string, envName: string) {
    const errorMessage = getCheckEnvsErrorMessage(applicationName, envName)

    super(errorMessage)
  }
}
