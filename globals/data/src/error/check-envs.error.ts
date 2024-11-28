export class CheckEnvsError extends Error {
  constructor(applicationName: string, envName: string) {
    const errorMessage = `Error on ${applicationName}, globals, data, check-envs-helper: ${envName} needed`

    super(errorMessage)
  }
}
