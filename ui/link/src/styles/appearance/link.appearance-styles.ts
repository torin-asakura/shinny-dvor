import { styleFn }    from 'styled-system'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

const appearanceLinkStyles: styleFn = ({ theme }) => ({
  primary: {
    color: theme.colors.black,
    '&:hover': {
      color: theme.colors.blue,
    },
    '&:active': {
      color: theme.colors.darkBlue,
    },
  },
})

export const appearanceStyles = () => switchProp(prop('variant', 'primary'), appearanceLinkStyles)
