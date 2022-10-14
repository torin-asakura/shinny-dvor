import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Text }            from '@ui/text'
import { setChosenRadius } from '@store/actions'

import { SelectorProps }   from './selector.interface'

const Selector: FC<SelectorProps> = ({
  closeTitle,
  selectDiameterTitle,
  radii,
  setOpenSelector,
}) => (
  <Box
    width={908}
    height={64}
    bottom={18}
    position='fixed'
    borderRadius='32px'
    backgroundColor='white'
    alignItems='center'
    justifyContent='center'
    boxShadow='deep'
    zIndex={2000}
  >
    <Row>
      <Layout flexBasis={24} />
      <Layout alignItems='center'>
        <Text>{selectDiameterTitle}</Text>
      </Layout>
      <Layout flexBasis={24} />
      <Box width={552}>
        {radii.map(({ contentAddons: { title } }) => (
          <Box key={title} minWidth={55} height={48}>
            <Button
              color='radius'
              onClick={() => {
                setChosenRadius(title)
                setOpenSelector(false)
              }}
            >
              <Layout>
                <Text fontSize='small' fontWeight='medium'>
                  {title}
                </Text>
              </Layout>
            </Button>

            <Layout flexBasis={8} flexShrink={0} />
          </Box>
        ))}
      </Box>
      <Layout flexBasis={20} />
      <Layout>
        <Button color='transparent' size='ghost' onClick={() => setOpenSelector(false)}>
          <Text color='darkGray' fontWeight='medium'>
            {closeTitle}
          </Text>
        </Button>
      </Layout>
    </Row>
  </Box>
)

export { Selector }
