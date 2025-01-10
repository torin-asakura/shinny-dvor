export interface ProgressBarConfig {
  /**
   * The size (height) of the progress bar.
   * Numeric values get converted to px. */
  size: number | string
  /**
   * Color of the progress bar. Also used for the glow
   * around the bar. */
  color: string
  /**
   * Class name used for the progress bar element. */
  className: string
  /**
   * How many milliseconds to wait before the progress bar
   * animation starts after calling .start(). */
  delay: number
}
class ProgressBarInt {
  /** Show the progress bar and begin animating it. */
  start: () => void
  /** End the progress bar animation. */
  finish: () => void
}

export interface ProgressBarConstructor {
  new (options: Partial<ProgressBarConfig>): ProgressBarInt
}
