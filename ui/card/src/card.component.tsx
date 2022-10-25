import styled                         from '@emotion/styled'
import { Container as BaseContainer } from '@atls-ui-parts/card'
import { Backdrop }                   from '@atls-ui-parts/card'
import { Renderer }                   from '@atls-ui-parts/card'
import { useCardControls }            from '@atls-ui-parts/card'

import React                          from 'react'
import { FC }                         from 'react'

import { Condition }                  from '@ui/condition'
import { Layout }                     from '@ui/layout'
import { Column }                     from '@ui/layout'

import { CardProps }                  from './card.interface'

const Card: FC<CardProps> = ({ children, container, backdrop = false }) => {
  const { cardProps, backdropProps, rendererProps, triggerProps, hide } = useCardControls({
    scrollThreshold: true,
  })

  const Container = styled(BaseContainer)(({ theme }) => ({
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.topSide,
    height: 'min-content',
    boxShadow: theme.shadows.light,
  }))

  return (
    <>
      <div {...triggerProps}>{children}</div>
      <Renderer {...rendererProps}>
        <Condition match={backdrop}>
          <Backdrop {...backdropProps} onClick={hide} />
        </Condition>
        <Container {...cardProps}>
          <Layout flexBasis={20} flexShrink={0} />
          <Column fill>
            <Layout flexBasis={20} />
            {container}
            <Layout flexBasis={20} />
          </Column>
          <Layout flexBasis={20} flexShrink={0} />
        </Container>
      </Renderer>
    </>
  )
}

export { Card }
