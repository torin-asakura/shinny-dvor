import { BREAKPOINT_CONDITIONS } from '@ui/theme'

export class PropsMapper {
  static sprinklesProps(props) {
    const mappedProps: Record<string, string | Record<keyof typeof BREAKPOINT_CONDITIONS, string>> =
      {}

    Object.entries(props).forEach(([propKey, propValue]) => {
      if (Array.isArray(propValue)) {
        const mappedPropValue: Record<keyof typeof BREAKPOINT_CONDITIONS, string> = {}

        Object.keys(BREAKPOINT_CONDITIONS).forEach((conditionName, index) => {
          mappedPropValue[conditionName] = propValue[index]
        })

        return (mappedProps[propKey] = mappedPropValue)
      } else if (typeof propValue === 'number' && propValue !== 0) {
        return (mappedProps[propKey] = `${propValue}px`)
      }

      return (mappedProps[propKey] = propValue)
    })

    return mappedProps
  }
}
