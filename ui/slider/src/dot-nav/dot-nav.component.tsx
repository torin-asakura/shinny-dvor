import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Layout }    from '@ui/layout'

import { Dot }       from './dot'
import { useStore }  from '../context'

const DotNav: FC = () => {
  const store = useStore()

  return [...Array(store.count)].map((i, idx) => (
    <>
      <Condition match={idx !== 0}>
        <Layout flexBasis={12} flexShrink={0} />
      </Condition>
      <Layout>
        <Dot active={idx === store.active} />
      </Layout>
    </>
  ))
}

export { DotNav }
