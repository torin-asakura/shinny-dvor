import React              from 'react'
import { FC }             from 'react'

import { Button }         from '@ui/button'
import { Condition }      from '@ui/condition'
import { ArrowLeftIcon }  from '@ui/icons'
import { ArrowRightIcon } from '@ui/icons'
import { Layout }         from '@ui/layout'

import { ArrowProps }     from './arrow.interfaces'
import { useStore }       from '../context'

const Arrow: FC<ArrowProps> = ({ direction }) => {
  const store = useStore()

  return (
    <Layout>
      <Button
        color='transparent'
        size='ghost'
        onClick={() => {
          if (direction === 'left') store.slideLeft()
          if (direction === 'right') store.slideRight()
        }}
      >
        <Layout>
          <Condition match={direction === 'left'}>
            <ArrowLeftIcon />
          </Condition>
          <Condition match={direction === 'right'}>
            <ArrowRightIcon />
          </Condition>
        </Layout>
      </Button>
    </Layout>
  )
}

export { Arrow }
