import type { BreakpointKey }            from '@ui/theme'

import type { Sprinkles }                from '../responsive-text/index.js'
import type { ResponsiveTextProps }      from '../responsive-text/index.js'

import { BREAKPOINT_CONDITIONS }         from '@ui/theme'

import { WITHOUT_PIXELS_PROPERTY_NAMES } from './props.constants.js'

type PropKey = keyof ResponsiveTextProps
// type MappedArrayType = { [K in BreakpointKey]?: number | string | undefined }
type MappedArrayType = Partial<Record<BreakpointKey, number | string | undefined>>

enum PropVaueTypes {
  Common = 'common',
  Array = 'array',
  Pixels = 'pixels',
}

export class PropsMapper {
  static sprinklesProps(props: ResponsiveTextProps): Sprinkles {
    const mappedProps: Record<string, unknown> = {}

    Object.entries(props).forEach(([unknownPropKey, propValue]) => {
      if (!propValue) return

      const propKey = unknownPropKey as unknown as PropKey
      const propValueType = this.getPropValueType(propKey, propValue)

      switch (propValueType) {
        case PropVaueTypes.Array:
          mappedProps[propKey] = this.mapArrayPropValue(
            propKey,
            propValue as Array<number | string | null | undefined>
          )
          break
        case PropVaueTypes.Pixels:
          mappedProps[propKey] = `${propValue as number}px`
          break
        default:
          mappedProps[propKey] = propValue
      }
    })

    return mappedProps
  }

  private static mapArrayPropValue = (
    propKey: PropKey,
    propValue: Array<number | string | null | undefined>
  ): MappedArrayType => {
    const mappedPropValue: MappedArrayType = {}

    Object.keys(BREAKPOINT_CONDITIONS).forEach((value, index) => {
      const conditionName = value as unknown as BreakpointKey
      const indexPropValue = propValue[index]
      const propValueType = this.getPropValueType(propKey, indexPropValue)

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

  private static getPropValueType(propKey: PropKey, propValue: unknown): PropVaueTypes {
    if (Array.isArray(propValue)) {
      return PropVaueTypes.Array
    }

    if (this.checkPixelsPropValueCondition(propKey, propValue)) {
      return PropVaueTypes.Pixels
    }

    return PropVaueTypes.Common
  }

  private static checkPixelsPropValueCondition(propKey: PropKey, propValue: unknown): boolean {
    if (
      typeof propValue === 'number' &&
      propValue !== 0 &&
      !WITHOUT_PIXELS_PROPERTY_NAMES.includes(propKey)
    )
      return true
    return false
  }
}
