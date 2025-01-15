/* eslint-disable @typescript-eslint/no-empty-function */

export interface ProgressBarConfig {
  size: number | string

  color: string

  className: string

  delay: number
}
class ProgressBarInt {
  start: () => void = () => {}

  finish: () => void = () => {}
}

export type ProgressBarConstructor = new (options: Partial<ProgressBarConfig>) => ProgressBarInt
