import type { KeyboardEvent }        from 'react'
import type { MouseEvent }           from 'react'
import type { FC }                   from 'react'

import React                         from 'react'
// @ts-ignore:next-line
import document                      from 'global/document'
import { default as BaseScrollLock } from 'react-scrolllock'
import { useAnimation }              from 'framer-motion'
import { nanoid }                    from 'nanoid'
import { useEffect }                 from 'react'
import { useCallback }               from 'react'

import { Box }                       from '@ui/layout'

import { Container }                 from './container/index.js'
import { LayerProps }                from './layer.interface.js'

const ScrollLock = BaseScrollLock as unknown as FC<any>

export const Layer: FC<LayerProps> = ({
  children,
  visible,
  onClose,
  scroll = false,
  opacity = 'none',
  center = false,
  top = 0,
  left = 0,
  ...props
}) => {
  const blackoutId = nanoid()
  const childrenId = nanoid()
  const main = useAnimation()

  const close = useCallback(() => {
    main
      .start({
        opacity: 0,
      })
      .then(onClose)
  }, [main, onClose])

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement

      if (
        target.contains(document.getElementById(blackoutId)) ||
        target === document.getElementById(blackoutId)
      ) {
        close()
      }
    },
    [blackoutId, close]
  )

  document.addEventListener('click', handleClick)

  useEffect(() => {
    main.start({
      opacity: 1,
    })

    return () => document.removeEventListener('click', handleClick)
  }, [handleClick, main])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  })

  if (visible) {
    return (
      <ScrollLock>
        <Container
          animate={main}
          initial={{ opacity: 0 }}
          scroll={scroll}
          opacity={opacity}
          id={blackoutId}
          justifyContent='center'
          alignItems='center'
          backgroundColor='white'
          {...props}
        >
          <Box
            id={childrenId}
            width='100%'
            height='100%'
            justifyContent='center'
            alignItems='center'
          >
            {children}
          </Box>
        </Container>
      </ScrollLock>
    )
  }
  return null
}
