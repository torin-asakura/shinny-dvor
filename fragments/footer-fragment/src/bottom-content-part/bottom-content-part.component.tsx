import type { FC }                     from 'react'

import type { BottomContentPartProps } from './bottom-content-part.interface.js'

import React                           from 'react'

import { Divider }                     from '@ui/divider'
import { Row }                         from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { Link }                        from '@ui/link'
import { Text }                        from '@ui/text'
import { Space }                       from '@ui/text'
import { normalizeString }             from '@shared/utils'

import { stringSeparator }             from '../helpers/index.js'

export const BottomContentPart: FC<BottomContentPartProps> = ({
  workingHours,
  telephone,
  appointmentPhone,
  byObj,
  adress,
}) => {
  const { firstPart, secondPart } = stringSeparator(workingHours)

  const by = new Map<string, string | undefined>()
  by.set('title', byObj?.title)
  by.set('content', byObj?.highlightedtext)
  by.set('link', byObj?.content)

  return (
    <Box maxWidth={['100%', '100%', 1440]} alignItems='center' width='100%'>
      <Layout flexBasis={[20, 20, 84]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[24, 24, 32]} />
        <Row justifyContent='space-between' alignItems='center' display={['none', 'none', 'flex']}>
          <Box width='50%'>
            <Column width={287}>
              <Text fontWeight='medium'>{normalizeString(adress)}</Text>
              <Layout flexBasis={10} />
              <Row>
                <Layout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {normalizeString(firstPart)}
                  </Text>
                </Layout>
                <Layout flexBasis={12} flexShrink={0} />
                <Layout>
                  <Divider direction='vertical' backgroundColor='darkGray' />
                </Layout>
                <Layout flexBasis={12} flexShrink={0} />
                <Layout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {normalizeString(secondPart)}
                  </Text>
                </Layout>
              </Row>
            </Column>
            <Layout flexBasis={80} />
            <Layout display='flex' flexDirection='column'>
              <Link href={`tel:${telephone}`}>
                <Text fontWeight='medium'>{telephone}</Text>
              </Link>
              <Layout flexBasis={8} />
              <Text fontSize='small' color='darkGray'>
                {appointmentPhone}
              </Text>
            </Layout>
          </Box>
          <Layout>
            <Text color='darkGray'>{normalizeString(by.get('content'))}</Text>
            <Space />
            <Link
              href={by.get('link')}
              title={normalizeString(by.get('content'))}
              target='_blank'
              rel='me'
            >
              <Text fontWeight='medium'>{by.get('title')}</Text>
            </Link>
          </Layout>
        </Row>
        <Column justifyContent='space-between' display={['flex', 'flex', 'none']}>
          <Layout>
            <Text fontWeight='medium'>{normalizeString(adress)}</Text>
          </Layout>
          <Layout flexBasis={8} flexShrink={0} />
          <Row>
            <Layout>
              <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                {normalizeString(firstPart)}
              </Text>
            </Layout>
            <Layout flexBasis={12} flexShrink={0} />
            <Layout>
              <Divider direction='vertical' backgroundColor='darkGray' />
            </Layout>
            <Layout flexBasis={12} flexShrink={0} />
            <Layout>
              <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                {normalizeString(secondPart)}
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={24} />
          <Row alignItems='flex-end' justifyContent='space-between'>
            <Column>
              <Layout>
                <Link href={`tel:${telephone}`}>
                  <Text fontWeight='medium'>{telephone}</Text>
                </Link>
              </Layout>
              <Layout flexBasis={8} flexShrink={0} />
              <Layout>
                <Text fontSize='small' color='darkGray'>
                  {appointmentPhone}
                </Text>
              </Layout>
            </Column>
            <Layout>
              <Link
                href={by.get('link')}
                target='_blank'
                rel='me'
                title={normalizeString(by.get('content'))}
              >
                <Text color='darkGray'>{normalizeString(by.get('content'))}</Text>
                <Space />
                <Text fontWeight='medium'>{by.get('title')}</Text>
              </Link>
            </Layout>
          </Row>
        </Column>
        <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
    </Box>
  )
}
