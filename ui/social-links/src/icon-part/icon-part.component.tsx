import type { FC }            from 'react'

import type { IconPartProps } from './icon-part.interfaces.js'

import React                  from 'react'

import { Button }             from '@ui/button'
import { Box }                from '@ui/layout'
import { Link }               from '@ui/link'
import { useHover }           from '@ui/utils'

export const IconPart: FC<IconPartProps> = ({ Icon, href, buttonSize = '$g48', size, dark }) => {
  const [hover, hoverProps] = useHover()
  const buttonVariant = dark ? 'inverse' : 'tertiary'

  const getIconColor = (): string => {
    if (dark) {
      return 'white'
    }

    return hover ? 'white' : 'black'
  }

  return (
    <Box
      width={buttonSize}
      height={buttonSize}
      borderRadius='$large.semiSmall'
      overflow='hidden'
      {...hoverProps}
    >
      <Link fill href={href} target='_blank'>
        <Button size='fill' variant={buttonVariant}>
          <Icon width={size || '$g24'} height={size || '$g24'} color={getIconColor()} />
        </Button>
      </Link>
    </Box>
  )
}
