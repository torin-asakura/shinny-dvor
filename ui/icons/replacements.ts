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

const getReplacement =
  (...themeProps) =>
  (color) => ({
    [color]: `{(theme.colors${themeProps.reduce(
      (str, prop) => `${str}.${prop}`,
      ''
    )}[props.color || 0] || props.color) || "${color}"}`,
  })

export const replacements = {
  LogoIcon: getReplacement()('#252C32'),
  WheelIcon: getReplacement()('#252C32'),
  VkIcon: getReplacement()('#252C32'),
  FacebookIcon: getReplacement()('#252C32'),
  MenuIcon: getReplacement()('#252C32'),
  BackIcon: getReplacement()('#252C32'),
}
