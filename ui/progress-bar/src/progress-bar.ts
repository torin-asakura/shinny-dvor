import { default as BaseProgressBar } from '@badrap/bar-of-progress'

const ProgressBar = BaseProgressBar as unknown as any

export const progressBar = new ProgressBar({
  className: 'bar-of-progress',
  delay: 100,
})
