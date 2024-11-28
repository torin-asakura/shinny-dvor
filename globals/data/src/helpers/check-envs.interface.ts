type CheckEnvsHelperProps = {
  applicationName: string
  envsList: Array<string>
}

export type CheckEnvsHelperType = (props: CheckEnvsHelperProps) => void
