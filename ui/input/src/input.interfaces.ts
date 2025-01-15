import type { RawInput } from '@atls-ui-parts/input'

type RawInputProps = React.ComponentProps<typeof RawInput>

export interface InputProps extends RawInputProps {
  size?: 26
  onChangeValue?: React.Dispatch<React.SetStateAction<string>>
}
