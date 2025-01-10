import type { ProgressBarConstructor } from './progress-bar.interface.js'

import { default as BaseProgressBar }  from '@badrap/bar-of-progress'

const ProgressBar = BaseProgressBar as unknown as ProgressBarConstructor

export const progressBar = new ProgressBar({
  className: 'bar-of-progress',
  delay: 100,
})
