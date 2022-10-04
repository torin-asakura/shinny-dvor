import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'

import { Button }                   from '@ui/button'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Text }                     from '@ui/text'
import { setChosenRadius }          from '@store/actions'
import { radiusVar }                from '@store/chosen-radius'
import { checkedRadiusServicesVar } from '@store/chosen-radius'

import { AvailableRadiiTileProps }  from './available-radii-tile.interface'

const AvailableRadiiTile: FC<AvailableRadiiTileProps> = ({ setOpen, radii }) => {
  const radius = useReactiveVar<string>(radiusVar)

  return (
    <Box
      width={328}
      height={136}
      borderRadius='default'
      boxShadow='deep'
      display={['none', 'none', 'flex']}
    >
      <Row>
        <Layout flexBasis={4} />
        <Column>
          <Layout flexBasis={8} />
          <Row flexWrap='wrap' justifyContent='center' height='100%'>
            {radii.map(({ contentAddons: { title } }) => (
              <React.Fragment key={title}>
                <Layout flexBasis={4} />
                <Box width={56} height={56}>
                  <Button
                    size='large'
                    color={radius === title ? 'primary' : 'radius'}
                    onClick={() => {
                      setOpen(false)
                      setChosenRadius(title)
                      checkedRadiusServicesVar(false)
                    }}
                  >
                    <Layout>
                      <Text fontSize='small' fontWeight='bold'>
                        {title}
                      </Text>
                    </Layout>
                  </Button>
                </Box>
                <Layout flexBasis={4} />
              </React.Fragment>
            ))}
          </Row>
        </Column>
      </Row>
    </Box>
  )
}

export { AvailableRadiiTile }
