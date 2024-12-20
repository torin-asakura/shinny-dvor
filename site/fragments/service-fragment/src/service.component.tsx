/* eslint-disable */

import type { ServiceProps }    from './service.interface.js'
import type { FC }              from 'react'

import React                    from 'react'
import { useEffect }            from 'react'
import { useState }             from 'react'

import { Booking }              from '@fragments/booking-fragment'
import { Accordion }            from '@ui/accordion'
import { Button }               from '@ui/button'
import { Condition }            from '@ui/condition'
import { Divider }              from '@ui/divider'
import { Layer }                from '@ui/layer'
import { Box }                  from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Switch }               from '@ui/switch'
import { Item }                 from '@ui/switch'
import { Ruble }                from '@ui/text'
import { Space }                from '@ui/text'
import { Text }                 from '@ui/text'
import { extractFragment }      from '@globals/data'
import { serviceVar }           from '@store/services'

import { AdditionalService }    from './additional-service/index.js'
import { CarBodiesCarousel }    from './carousel/index.js'
import { WorkExamplesCarousel } from './carousel/index.js'
import { Radii }                from './radii/index.js'
import { ReturnButton }         from './return-button/index.js'
import { WorkExample }          from './work-example/index.js'
import { carBodyConverter }     from './helpers/index.js'

const Service: FC<ServiceProps> = ({
  servicesData,
  availableRadiiData,
  fragmentsData,
  carBodiesData,
  serviceData,
  navigationData,
}) => {
  const {
    servicesParams: {
      price,
      title: serviceName,
      bodies: carBodies,
      addon,
      description,
      variant,
      workexamples,
      additionalservice,
    },
  } = serviceData

  // @ts-expect-error null
  const [onCarBody, setOnCarBody] = useState<string>(carBodies[0])
  const carBody = carBodyConverter(onCarBody)

  // @ts-expect-error undefined
  const availableRadii = Object.entries(price)
    .filter((item: any) => item[1]?.[carBody] !== null)
    .map((item) => item[0])
    .filter((item) => item.length < 4)

  const [visible, setVisible] = useState<boolean>(false)
  const [radius, setRadius] = useState<string>(availableRadii[0])
  const [isAdditionalService, setIsAdditionalService] = useState<boolean>(true)

  const { title: goBack } = extractFragment('contentAddons', 'all-services', fragmentsData)
  const { title: signUp } = extractFragment('contentAddons', 'sign-up', fragmentsData)
  const { title: workExamplesTitle } = extractFragment(
    'contentAddons',
    'work-examples-title',
    fragmentsData
  )

  const workExamplesData = [
    {
      // @ts-expect-error null | undefined
      image: workexamples.firstexample.image,
      // @ts-expect-error null | undefined
      title: workexamples.firstexample.title,
      price,
    },
    {
      // @ts-expect-error null | undefined
      image: workexamples.secondexample.image,
      // @ts-expect-error null | undefined
      title: workexamples.secondexample.title,
      price,
    },
  ]

  useEffect(() => {
    if (!availableRadii.includes(radius)) setRadius(availableRadii[0])
  }, [onCarBody])

  // @ts-expect-error null | undefined
  const defaultPrice = price[Object.keys(price)[1]]?.passenger
  // @ts-expect-error null | undefined
  const servicePrice = price[radius]?.[carBody]

  return (
    <>
      <Layer
        visible={visible}
        onClose={() => {
          setVisible(true)
        }}
      >
        <Booking
          setVisible={setVisible}
          fragmentsData={fragmentsData}
          availableRadiiData={availableRadiiData}
          carBodiesData={carBodiesData}
          servicesData={servicesData}
          navigationData={navigationData}
          // @ts-expect-error null | undefined
          additionalService={isAdditionalService ? additionalservice.title : ''}
        />
      </Layer>
      <Box width='100%' maxWidth={['100%', '100%', 1440]} marginTop={[80, 80, 104]}>
        <Row>
          <Layout flexBasis={[20, 20, 299]} flexShrink={[0, 0, 1]} />
          <Column width='100%'>
            <Layout flexBasis={[20, 20, 32]} />
            <Box width={102}>
              <ReturnButton title={goBack} />
            </Box>
            <Layout flexBasis={32} />
            <Layout>
              <Text
                fontWeight='$medium'
                fontSize={['$extraLarge', '$extraLarge', '$giant']}
                lineHeight='$grown'
                display='inline'
              >
                {serviceName}
              </Text>
            </Layout>
            <Condition match={variant === 'primary' || variant === 'tertiary'}>
              <Layout flexBasis={28} />
              <Layout display={['none', 'none', 'flex']}>
                <Switch active={onCarBody} items={carBodies} onSelect={setOnCarBody} />
              </Layout>
              <Layout flexBasis={24} />
              <Box
                height={48}
                alignItems='center'
                borderRadius='$default'
                backgroundColor='$fillGray'
                display={['flex', 'flex', 'none']}
              >
                <CarBodiesCarousel>
                  {
                    // @ts-expect-error null | undefined
                    carBodies.map((item: string) => (
                      <Box
                        key={item}
                        width='100%'
                        height='100%'
                        alignItems='center'
                        justifyContent='center'
                        borderRadius='$small'
                        backgroundColor={onCarBody === item ? '$primaryBlue' : '$fillGray'}
                      >
                        <Button
                          color='transparent'
                          size='small'
                          height='100%'
                          width='100%'
                          onClick={() => {
                            setOnCarBody(item)
                          }}
                        >
                          <Text
                            color={onCarBody === item ? '$white' : '$black'}
                            fontWeight='$semiBold'
                            fontSize='$small'
                          >
                            {item}
                          </Text>
                        </Button>
                      </Box>
                    ))
                  }
                </CarBodiesCarousel>
              </Box>
              <Layout flexBasis={[24, 24, 0]} />
              <Layout>
                <Radii items={availableRadii} selectedItem={radius} setSelectedItem={setRadius} />
              </Layout>
              <Layout flexBasis={24} />
            </Condition>
            <Condition match={variant === 'secondary'}>
              <Layout flexBasis={24} />
              <Divider backgroundColor='gray' />
              <Layout flexBasis={24} />
            </Condition>
            <Row>
              <Text fontSize={['$xl', '$giant', '$giant']} fontWeight='$medium'>
                {servicePrice !== undefined && servicePrice}
                <Space />
                <Ruble />
              </Text>
              <Layout flexBasis={24} />
              <Column justifyContent='center'>
                <Condition match={Boolean(addon)}>
                  <Box
                    height={28}
                    backgroundColor='$lightGray'
                    padding='6px 10px'
                    borderRadius='$normal'
                  >
                    <Text color='$darkGray'>{addon}</Text>
                  </Box>
                </Condition>
              </Column>
            </Row>
            <Layout flexBasis={24} />
            <Divider backgroundColor='gray' />
            <Layout flexBasis={24} />
            <Layout>
              <Column fill>
                {
                  // @ts-expect-error null | undefined
                  description.split('|n|').map((item: string) => (
                    <Text key={item} lineHeight='$medium'>
                      {item}
                    </Text>
                  ))
                }
              </Column>
            </Layout>
            <Condition match={variant === 'tertiary'}>
              <Layout flexBasis={24} />
              <Divider backgroundColor='gray' />
              <Layout flexBasis={24} />
              <Row display={['none', 'none', 'flex']}>
                <Accordion text={workExamplesTitle}>
                  <Box
                    width='100%'
                    justifyContent='center'
                    borderRadius='$little'
                    backgroundColor='$lightGray'
                  >
                    {workExamplesData?.map(({ image, title, price: cost }, index) => (
                      <React.Fragment key={title}>
                        <WorkExample
                          // @ts-expect-error undefined
                          image={image}
                          // @ts-expect-error undefined
                          title={title}
                          price={defaultPrice}
                        />
                        <Condition match={index === 0}>
                          <Layout flexBasis={16} flexShrink={0} />
                        </Condition>
                      </React.Fragment>
                    ))}
                  </Box>
                </Accordion>
              </Row>
              <Row display={['flex', 'flex', 'none']}>
                <Accordion text={workExamplesTitle}>
                  <WorkExamplesCarousel>
                    {workExamplesData?.map(({ image, title, price: cost }, index) => (
                      <React.Fragment key={title}>
                        <WorkExample
                          // @ts-expect-error undefined
                          image={image}
                          // @ts-expect-error undefined
                          title={title}
                          price={defaultPrice}
                        />
                        <Condition match={index === 0}>
                          <Layout flexBasis={32} flexShrink={0} />
                        </Condition>
                      </React.Fragment>
                    ))}
                  </WorkExamplesCarousel>
                </Accordion>
              </Row>
            </Condition>
            <Condition
              // @ts-expect-error null | undefined
              match={variant === 'primary' && additionalservice.title !== null}
            >
              <Layout flexBasis={24} />
              <AdditionalService
                isAdditionalService={isAdditionalService}
                setIsAdditionalService={setIsAdditionalService}
                // @ts-expect-error undefined
                additionalservice={additionalservice}
              />
            </Condition>
            <Layout flexBasis={32} />
            <Box width='100%' height={48}>
              <Button
                onClick={() => {
                  setVisible(true)
                  // @ts-expect-error no assignable
                  serviceVar({ radius, carBody: onCarBody, serviceName })
                }}
              >
                <Text fontWeight='$medium'>
                  {signUp}
                  <Space />
                  {servicePrice !== undefined && servicePrice}
                  <Space />
                  <Ruble />
                </Text>
              </Button>
            </Box>
            <Layout flexBasis={[65, 65, 120]} />
          </Column>
          <Layout flexBasis={[20, 20, 299]} flexShrink={[0, 0, 1]} />
        </Row>
      </Box>
    </>
  )
}

export { Service }
