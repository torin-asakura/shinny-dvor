import type { FC }                     from 'react'

import type { AdditionalServiceProps } from './additional-service.interface.js'

import React                           from 'react'

import { Checkbox }                    from '@ui/checkbox'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Text }                        from '@ui/text'
import { Ruble }                       from '@ui/text'
import { Space }                       from '@ui/text'

const AdditionalService: FC<AdditionalServiceProps> = ({
  isAdditionalService,
  setIsAdditionalService,
  additionalservice,
}) => (
  <Box
    width='100%'
    height={[88, 88, 104]}
    backgroundColor='fillGray'
    borderRadius='mini'
    alignItems='center'
  >
    <Layout flexBasis={[20, 20, 24]} />
    <Checkbox active={isAdditionalService} onCheck={setIsAdditionalService}>
      <Column justifyContent='center'>
        <Layout>
          <Text fontSize={['big', 'big', 'large']} fontWeight='medium'>
            {additionalservice.title}
          </Text>
        </Layout>
        <Layout flexBasis={4} />
        <Layout>
          <Text fontSize={['big', 'big', 'large']} fontWeight='medium'>
            {additionalservice.price}
            <Space />
            <Ruble />
          </Text>
        </Layout>
      </Column>
    </Checkbox>
    <Layout flexBasis={[20, 20, 24]} />
  </Box>
)

export { AdditionalService }
