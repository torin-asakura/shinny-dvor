export const getColorBackground = (step: number, scrollY?: number) => {
  switch (step) {
    case 0:
      if (Math.abs(scrollY!) > 100) {
        console.log('case 0', scrollY)
        return 'white'
      } else {
        return 'transparent'
      }
    case 1:
      return 'white'
    case 2:
      return 'white'
    case 3:
      return 'white'
    case 4:
      return 'white'
    default:
      return 'white'
  }
}
