import type { ResponsiveContainerProps } from '../responsive-container/index.js'
import type { Sprinkles }                from '../responsive-container/index.js'
import type { SprinklesArray }           from '../responsive-container/index.js'
import type { BreakpointKey }            from '@ui/theme'

import { BREAKPOINT_CONDITIONS }         from '@ui/theme'

type PropKey = keyof ResponsiveContainerProps
type MappedArrayType = { [K in BreakpointKey]?: string | number | undefined }

enum PropVaueTypes {
  Common = 'common',
  Array = 'array',
  Pixels = 'pixels',
}

const WITHOUT_PIXELS_PROPERTY_NAMES = ['zIndex']

export class PropsMapper {
  static sprinklesProps(props: ResponsiveContainerProps): Sprinkles {
    const mappedProps: Sprinkles = {}

    Object.entries(props).forEach(([unknownPropKey, propValue]) => {
      const propKey = unknownPropKey as unknown as PropKey
      const propValueType = this.getPropValueType(propKey, propValue)

      switch (propValueType) {
        case PropVaueTypes.Array:
          const mappedPropValue = this.mapArrayPropValue(propKey, propValue as SprinklesArray)
          mappedProps[propKey] = mappedPropValue
          break
        case PropVaueTypes.Pixels:
          mappedProps[propKey] = `${propValue}px`
          break
        default:
          mappedProps[propKey] = propValue
      }
    })

    return mappedProps
  }

  private static mapArrayPropValue = (
    propKey: PropKey,
    propValue: Array<string | number | undefined | null>
  ): MappedArrayType => {
    const mappedPropValue: MappedArrayType = {}

    Object.keys(BREAKPOINT_CONDITIONS).forEach((value, index) => {
      const conditionName = value as unknown as BreakpointKey
      const indexPropValue = propValue[index]
      const propValueType = this.getPropValueType(propKey, propValue)

      if (indexPropValue) {
        switch (propValueType) {
          case PropVaueTypes.Pixels:
            mappedPropValue[conditionName] = `${indexPropValue}px`
            break
          default:
            mappedPropValue[conditionName] = indexPropValue
        }
      }
    })

    return mappedPropValue
  }

  private static getPropValueType(propKey: PropKey, propValue: any): PropVaueTypes {
    if (Array.isArray(propValue)) {
      return PropVaueTypes.Array
    } else if (this.checkPixelsPropValueCondition(propKey, propValue)) {
      return PropVaueTypes.Pixels
    }
    return PropVaueTypes.Common
  }

  private static checkPixelsPropValueCondition(propKey: PropKey, propValue: any): boolean {
    if (
      typeof propValue === 'number' &&
      propValue !== 0 &&
      !WITHOUT_PIXELS_PROPERTY_NAMES.includes(propKey)
    )
      return true
    return false
  }
}
