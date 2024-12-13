type CheckEnvsHelperProps = {
  applicationName: string
  envsList: Array<string>
  isDevelopment?: boolean
}

export type CheckEnvsHelperType = (props: CheckEnvsHelperProps) => void
