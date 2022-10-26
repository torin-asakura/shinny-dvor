/**
 * Usage - getReplacement([<color to replace>,<prop to replace with>])
 * Takes unlimited amount of replacements: getReplacement(['#000000','color],['transparent','stroke'],[14,'width']) etc.
 *
 * Example
 *
 * Icon: <svg fill='#000000' path='#111111' stroke='transparent' />
 * Replacement func: getReplacement(['#000000','fillColor'],['#111111','pathColor'],['transparent','strokeColor'])
 * Result:
 * <svg
 * fill={theme.colors[props.fillColor] || props.fillColor || '#000000'}
 * path={theme.colors[props.pathColor] || props.pathColor || '#111111'}
 * stroke={theme.colors[props.strokeColor] || props.strokeColor || 'transparent'}
 * />
 * */

import { getColorReplacement } from '@atls-ui-generators/icons'

export const replacements = {
  LogoIcon: getColorReplacement({ color: '#252C32' }),
  WheelIcon: getColorReplacement({ color: '#252C32' }),
  VkIcon: getColorReplacement({ color: '#252C32' }),
  FacebookIcon: getColorReplacement({ color: '#252C32' }),
  MenuIcon: getColorReplacement({ color: 'white' }),
  BackIcon: getColorReplacement({ color: '#252C32' }),
}
