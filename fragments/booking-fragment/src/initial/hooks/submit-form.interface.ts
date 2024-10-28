type SubmitFormHookProps = {
  name: string
  phone: string
  selectedCarBody: string
  selectedRadius: string
  selectedRepairTypes: Array<string>
  comment: string
}

type SubmitFormHookType = (props: SubmitFormHookProps) => Promise<void>

export type { SubmitFormHookType }
