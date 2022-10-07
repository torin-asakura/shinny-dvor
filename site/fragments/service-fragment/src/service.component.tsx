import React                 from 'react'
import { FC }                from 'react'
import { useState }          from 'react'

import { ALL_SERVICES }      from '@store/services'
import { Accordion }         from '@ui/accordion/src'
import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Divider }           from '@ui/divider'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Switch }            from '@ui/switch'
import { Item }              from '@ui/switch'
import { Ruble }             from '@ui/text'
import { Space }             from '@ui/text'
import { Text }              from '@ui/text'
import { screenVar }         from '@store/services'

import { AdditionalService } from './additional-service'
import { Carousel }          from './carousel'
import { ReturnButton }      from './return-button'
import { WorkExample }       from './work-example'

const Service: FC = () => {
  // eslint-disable-next-line
  let variant = 'tertiary' // secondary, tertiary
  const description = '1. Снятие колес|n|2. Балансировка колес|n|3. Монтаж/демонтаж резины с дисков'
  const carBodyList = ['Легковой', 'Джип', 'Минивэн', 'Микроавтобус', 'Грузовой']
  const [onCarBody, setOnCarBody] = useState(carBodyList[0])
  const [additionalService, setAdditionalService] = useState<boolean>(false)

  const arr = [
    {
      image: {
        sourceUrl: 'https://wp.shdvor.pro/wp-content/uploads/2022/07/alloy-wheel-repair-1.png',
        altText: 'text',
      },
      title: 'Литые диски',
      price: 0,
    },
    {
      image: {
        sourceUrl: 'https://wp.shdvor.pro/wp-content/uploads/2022/07/alloy-wheel-repair-1.png',
        altText: 'text',
      },
      title: 'Литые диски',
      price: 0,
    },
  ]
  return (
    <Box width='100%' marginTop={[80, 80, 104]}>
      <Row>
        <Layout flexBasis={[20, 20, 299]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 32]} />
          <Box width={102}>
            <ReturnButton />
          </Box>
          <Layout flexBasis={32} />
          <Layout>
            <Text
              fontWeight='medium'
              fontSize={['extraLarge', 'extraLarge', 'giant']}
              lineHeight='grown'
            >
              Text
            </Text>
          </Layout>
          <Layout flexBasis={8} />
          <Condition match={variant === 'primary' || variant === 'tertiary'}>
            <Layout flexBasis={24} />
            <Switch active={onCarBody}>
              {carBodyList.map((item) => (
                <Item value={item} onSelect={setOnCarBody}>
                  {item}
                </Item>
              ))}
            </Switch>
            <Layout flexBasis={24} />
          </Condition>
          <Layout>
            <Text fontSize='xl' fontWeight='medium'>
              1000
              <Space />
              <Ruble />
            </Text>
            <Space />
            <Text color='darkGray' fontSize='xl' fontWeight='medium'>
              за диск
            </Text>
          </Layout>
          <Layout flexBasis={24} />
          <Divider backgroundColor='gray' />
          <Layout flexBasis={24} />
          <Layout>
            <Column fill>
              {description.split('|n|').map((item) => (
                <Text lineHeight='medium'>{item}</Text>
              ))}
            </Column>
          </Layout>
          <Condition match={variant === 'tertiary'}>
            <Layout flexBasis={24} />
            <Divider backgroundColor='gray' />
            <Layout flexBasis={24} />
            <Row display={['none', 'none', 'flex']}>
              <Accordion text='Примеры работ'>
                {arr.map(({ image, title, price }, index) => (
                  <>
                    <WorkExample image={image} title={title} price={price} />
                    <Condition match={index === 0}>
                      <Layout flexBasis={32} flexShrink={0} />
                    </Condition>
                  </>
                ))}
              </Accordion>
            </Row>
            <Row display={['flex', 'flex', 'none']} overflow='hidden'>
              <Carousel>
                {arr.map(({ image, title, price }) => (
                  <WorkExample image={image} title={title} price={price} />
                ))}
              </Carousel>
            </Row>
          </Condition>
          <Condition match={variant === 'primary'}>
            <Layout flexBasis={24} />
            <AdditionalService
              additionalService={additionalService}
              setAdditionalService={setAdditionalService}
            />
            <Layout flexBasis={24} />
          </Condition>
          <Layout flexBasis={32} />
          <Box width='100%' height={48}>
            <Button onClick={() => screenVar(ALL_SERVICES)}>Button</Button>
          </Box>
          <Layout flexBasis={[65, 65, 120]} />
        </Column>
        <Layout flexBasis={[20, 20, 299]} flexShrink={0} />
      </Row>
    </Box>
  )
}

export { Service }
