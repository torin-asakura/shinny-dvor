const getReplacement =
  (...themeProps) =>
  (color) => ({
    [color]: `{(theme.colors${themeProps.reduce(
      (str, prop) => `${str}.${prop}`,
      ''
    )}[props.color] || props.color) || "${color}"}`,
  })

export const replacements = {
  LogoIcon: getReplacement()('#252C32'),
  WheelIcon: getReplacement()('#252C32'),
}
