import React         from 'react'
import { FC }        from 'react'

import { screenVar } from '@store/booking'
import { INITIAL }   from '@store/booking'
import { Button }    from '@ui/button'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

const Invalid: FC = () => (
  <Column width='100%'>
    <Layout flexBasis={[40, 44, 44]} />
    <Layout>
      <Text fontWeight='medium' fontSize='giant'>
        Что-то пошло не так
      </Text>
    </Layout>
    <Layout flexBasis={24} />
    <Layout>
      <Text>Text</Text>
    </Layout>
    <Layout flexBasis={32} />
    <Button color='secondary' onClick={() => screenVar(INITIAL)}>
      Button
    </Button>
    <Layout flexBasis={[48, 128, 128]} />
  </Column>
)

export { Invalid }
