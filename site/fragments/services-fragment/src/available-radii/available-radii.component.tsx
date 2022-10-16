import React                   from 'react'
import { FC }                  from 'react'

import { Button }              from '@ui/button'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'
import { setChosenRadius }     from '@store/actions'

import { AvailableRadiiProps } from './available-radii.interface'

const AvailableRadii: FC<AvailableRadiiProps> = ({ radii, title }) => (
  <Box width='100%' borderRadius='little' boxShadow='deep'>
    <Row>
      <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[20, 20, 32]} />
        <Layout>
          <Text fontWeight='medium' fontSize={['big', 'big', 'large']} lignHeight='grown'>
            {title}
          </Text>
        </Layout>
        <Layout flexBasis={[16, 16, 24]} />
        <Row flexWrap='wrap'>
          {radii.map(({ contentAddons: { title: radius } }) => (
            <Column height='auto'>
              <Row>
                <Box width={[60, 60, 64]} height={48}>
                  <Button size='normal' color='radius' onClick={() => setChosenRadius(radius)}>
                    <Layout>
                      <Text fontSize='small' fontWeight='medium'>
                        {radius}
                      </Text>
                    </Layout>
                  </Button>
                </Box>
                <Layout flexBasis={[12, 12, 16]} flexShrink={0} />
              </Row>
              <Layout flexBasis={[12, 12, 16]} flexShrink={0} />
            </Column>
          ))}
        </Row>
        <Layout flexBasis={[8, 8, 16]} />
      </Column>
      <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
    </Row>
  </Box>
)

export { AvailableRadii }
