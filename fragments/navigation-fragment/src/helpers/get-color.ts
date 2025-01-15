import type { vars } from '@ui/theme'

export const getColor = (
  step?: number,
  scrollY?: number,
  activeLink?: boolean
): keyof typeof vars.colors => {
  if (step !== 0 && activeLink) return 'darkBlue'
  if (step === 0 && Math.abs(scrollY || 0) < 100) return 'white'
  if (step === 0 && Math.abs(scrollY || 0) > 100 && activeLink) return 'darkBlue'
  return 'black'
}
