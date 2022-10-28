export const getColor = (step: number, scrollY?: number) => {
  if (step === 0 && Math.abs(scrollY!) < 100) return 'white'
  if (step === 1) return 'black'
  if (step === 2) return 'black'
  if (step === 3) return 'black'
  if (step === 4) return 'black'
  return 'black'
}
