export const BREAKPOINT_CONDITIONS = {
  mobile: {},
  tablet: { '@media': 'screen and (min-width: 40em)' },
  desktop: { '@media': 'screen and (min-width: 52em)' },
}

export type BreakpointKey = keyof typeof BREAKPOINT_CONDITIONS
