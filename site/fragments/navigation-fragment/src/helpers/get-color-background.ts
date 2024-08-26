export const getColorBackground = (step: number, scrollY?: number) => {
  if (step === 0 && Math.abs(scrollY!) > 100) return 'white'
  if (step === 1) return 'white'
  if (step === 2) return 'white'
  if (step === 3) return 'white'
  if (step === 4) return 'white'
  return 'transparent'
}
