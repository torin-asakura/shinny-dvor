/* eslint-disable */

export const getColor = (step: number, scrollY?: number, activeLink?: boolean) => {
  if (step !== 0 && activeLink) return 'darkBlue'
  if (step === 0 && Math.abs(scrollY!) < 100) return 'white'
  if (step === 0 && Math.abs(scrollY!) > 100 && activeLink) return 'darkBlue'
  return 'black'
}
