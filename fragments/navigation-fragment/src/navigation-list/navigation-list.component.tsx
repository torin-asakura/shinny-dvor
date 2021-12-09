import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Condition }           from '@ui/condition'
import { Divider }             from '@ui/divider'
import { NextLink }            from '@ui/link'
import { Text }                from '@ui/text'

import { NavigationItem }      from '../navigation-item/navigation-item.component'
import { NavigationListProps } from './navigation-list.interface'

const NavigationList: FC<NavigationListProps> = ({ pageStyle }) => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <Condition match={pageStyle === 'dark'}>
      <NextLink href='/services'>
        <Column>
          <Layout>
            <Text color='white'>Услуги</Text>
          </Layout>
          <Layout flexBasis={8} />
          <Divider />
        </Column>
      </NextLink>
      <NextLink href='/prices'>
        <Layout>
          <Text color='white'>Прайс лист</Text>
        </Layout>
      </NextLink>
      <NextLink href='/contacts'>
        <Layout>
          <Text color='white'>Контакты</Text>
        </Layout>
      </NextLink>
      <NextLink href='/blog'>
        <Layout>
          <Text color='white'>Блог</Text>
        </Layout>
      </NextLink>
    </Condition>
    <Condition match={pageStyle === 'light'}>
      <NextLink href='/services'>
        <NavigationItem name='services' />
      </NextLink>
      <NextLink href='/prices'>
        <NavigationItem name='prices' />
      </NextLink>
      <NextLink href='/contacts'>
        <NavigationItem name='contacts' />
      </NextLink>
      <NextLink href='/blog'>
        <NavigationItem name='blog' />
      </NextLink>
    </Condition>
  </Box>
)

export { NavigationList }
