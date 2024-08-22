export const getColorBackground = (step: number, scrollY?: number) => {
  switch (step) {
    case 0 && Math.abs(scrollY!):
      return 'white'
    case 1:
      return 'white'
    case 2:
      return 'white'
    case 3:
      return 'white'
    case 4:
      return 'white'
    default:
      return 'transparent'
  }
}
