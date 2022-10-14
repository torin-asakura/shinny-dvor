const colors = {
  white: 'rgba(255, 255, 255, 1)',
  gray: 'rgba(37, 44, 50, 0.12)',
  lightGray: 'rgba(37, 44, 50, 0.06)',
  charcoal: 'rgba(255, 255, 255, 0.6)',
  steel: 'rgba(37, 44, 50, 0.7)',
  milkGray: 'rgba(255, 255, 255, 0.2)',
  transparentGray: 'rgba(248, 248, 248, 1)',
  fillGray: 'rgba(249, 249, 249, 1)',
  darkGray: 'rgba(123, 131, 138, 1)',
  black: 'rgba(37, 44, 50, 1)',
  blue: 'rgba(48, 100, 235, 1)',
  darkBlue: 'rgba(38, 89, 220, 1)',
  primaryBlue: 'rgba(69, 121, 255, 1)',
  button: {
    primary: {
      default: {
        background: 'rgba(69, 121, 255, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(69, 121, 255, 1)',
      },
      hover: {
        background: 'rgba(48, 100, 235, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(48, 100, 235, 1)',
      },
      pressed: {
        background: 'rgba(38, 89, 220, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(38, 89, 220, 1)',
      },
      disabled: {
        background: 'rgba(197, 200, 203, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(197, 200, 203, 1)',
      },
    },
    secondary: {
      default: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(37, 44, 50, 1)',
        border: 'rgba(37, 44, 50, 0.12)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(48, 100, 235, 1)',
        border: 'rgba(48, 100, 235, 1)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(38, 89, 220, 1)',
        border: 'rgba(38, 89, 220, 1)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(197, 200, 203, 1)',
        border: 'rgba(197, 200, 203, 1)',
      },
    },
    radius: {
      default: {
        background: 'rgba(37, 44, 50, 0.06)',
        font: 'rgba(37, 44, 50, 1)',
        border: 'rgba(37, 44, 50, 0.06)',
      },
      hover: {
        background: 'rgba(48, 100, 235, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(48, 100, 235, 1)',
      },
      pressed: {
        background: 'rgba(38, 89, 220, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(38, 89, 220, 1)',
      },
      disabled: {
        background: 'rgba(37, 44, 50, 0.06)',
        font: 'rgba(197, 200, 203, 1)',
        border: 'rgba(37, 44, 50, 0.06)',
      },
    },
    darkSocial: {
      default: {
        background: 'rgba(255, 255, 255, 0.2)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(255, 255, 255, 0.2)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 0.3)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(255, 255, 255, 0.3)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 0.4)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(255, 255, 255, 0.4)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 0.1)',
        font: 'rgba(197, 200, 203, 1)',
        border: 'rgba(255, 255, 255, 0.1)',
      },
    },
    lightWheel: {
      default: {
        background: 'rgba(37, 44, 50, 0.06)',
        font: 'rgba(37, 44, 50, 1)',
        border: 'rgba(37, 44, 50, 0.06)',
      },
      hover: {
        background: 'rgba(37, 44, 50, 0.06)',
        font: 'rgba(48, 100, 235, 1)',
        border: 'rgba(37, 44, 50, 0.06)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(38, 89, 220, 1)',
        border: 'rgba(255, 255, 255, 1)',
      },
      disabled: {
        background: 'rgba(37, 44, 50, 0.06)',
        font: 'rgba(197, 200, 203, 1)',
        border: 'rgba(37, 44, 50, 0.06)',
      },
    },
    darkWheel: {
      default: {
        background: 'rgba(255, 255, 255, 0.2)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(255, 255, 255, 0.2)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 0.3)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(255, 255, 255, 0.3)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(37, 44, 50, 1)',
        border: 'rgba(255, 255, 255, 1)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 0.1)',
        font: 'rgba(255, 255, 255, 0.5)',
        border: 'rgba(255, 255, 255, 0.1)',
      },
    },
    grey: {
      default: {
        background: 'transparent',
        font: 'rgba(255, 255, 255, 0.6)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgba(255, 255, 255, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'transparent',
        font: 'rgba(255, 255, 255, 0.4)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgba(255, 255, 255, 0.5)',
        border: 'transparent',
      },
    },
    transparent: {
      default: {
        background: 'transparent',
        font: 'rgba(37, 44, 50, 1)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgba(37, 44, 50, 1)',
        border: 'transparent',
      },
      pressed: {
        background: 'transparent',
        font: 'rgba(37, 44, 50, 1)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgba(37, 44, 50, 1)',
        border: 'transparent',
      },
    },
  },
}

export { colors }
