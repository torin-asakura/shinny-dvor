import type { FC }                         from 'react'

import type { ServiceProps }               from './service.interface.js'
import type { RequiredAdditionalService }  from './service.interface.js'

import React                               from 'react'

import { Booking }                         from '@fragments/booking-fragment'
import { Condition }                       from '@ui/condition'
import { Divider }                         from '@ui/divider'
import { Box }                             from '@ui/layout'
import { Row }                             from '@ui/layout'
import { Column }                          from '@ui/layout'
import { Text }                            from '@ui/text'
import { serviceVar }                      from '@store/services'

import { AdditionalService }               from './additional-service/index.js'
import { CarBodiesCarouselDesktopVariant } from './car-bodies-carousel-desktop-variant/index.js'
import { CarBodiesCarouselMobileVariant }  from './car-bodies-carousel-mobile-variant/index.js'
import { DescriptionPart }                 from './description-part/index.js'
import { Radii }                           from './radii/index.js'
import { ReturnButton }                    from './return-button/index.js'
import { ServicePricePart }                from './service-price-part/index.js'
import { SignupButtonPart }                from './signup-button-part/index.js'
import { WorkExamplesDesktopVariant }      from './work-examples-desktop-variant/index.js'
import { WorkExamplesMobileVariant }       from './work-examples-mobile-variant/index.js'
import { useService }                      from './hooks/use-service.hook.js'

export const Service: FC<ServiceProps> = ({
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

  const {
    visible,
    setVisible,
    onCarBody,
    setOnCarBody,
    radius,
    setRadius,
    availableRadii,
    servicePrice,
    defaultPrice,
    workExamplesTitle,
    workExamplesData,
    isAdditionalService,
    setIsAdditionalService,
    signUp,
    goBack,
  } = useService({ carBodies, price, workexamples, fragmentsData })

  return (
    <>
      <Booking
        visible={visible}
        setVisible={setVisible}
        fragmentsData={fragmentsData}
        availableRadiiData={availableRadiiData}
        carBodiesData={carBodiesData}
        servicesData={servicesData}
        navigationData={navigationData}
      />
      <Box
        width='$fill'
        maxWidth={882}
        paddingX={[20, 20, 20]}
        marginTop={[100, 100, 144]}
        paddingBottom={['$g32', '$g32', '$g80']}
      >
        <Row>
          <Column width='100%' gap={[20, 20, 32]}>
            <ReturnButton title={goBack} />
            <Column gap={24}>
              <Text
                fontWeight='$medium'
                fontSize={['$extraLarge', '$extraLarge', '$giant']}
                lineHeight='$grown'
                display='inline'
              >
                {serviceName}
              </Text>
              <Condition match={variant === 'primary' || variant === 'tertiary'}>
                <CarBodiesCarouselDesktopVariant
                  carBodies={carBodies}
                  setOnCarBody={setOnCarBody}
                  onCarBody={onCarBody}
                />

                <CarBodiesCarouselMobileVariant
                  carBodies={carBodies}
                  setOnCarBody={setOnCarBody}
                  onCarBody={onCarBody}
                />

                <Radii items={availableRadii} selectedItem={radius} setSelectedItem={setRadius} />
              </Condition>

              <Condition match={variant === 'secondary'}>
                <Box paddingY='$g24'>
                  <Divider color='$gray' />
                </Box>
              </Condition>

              <ServicePricePart servicePrice={servicePrice} addon={addon} />

              <Box>
                <Divider color='$gray' />
              </Box>

              <DescriptionPart description={description} />

              <Condition match={variant === 'tertiary'}>
                <Divider color='$gray' />

                <WorkExamplesDesktopVariant
                  workExamplesTitle={workExamplesTitle}
                  workExamplesData={workExamplesData}
                  defaultPrice={defaultPrice}
                />

                <WorkExamplesMobileVariant
                  workExamplesTitle={workExamplesTitle}
                  workExamplesData={workExamplesData}
                  defaultPrice={defaultPrice}
                />
              </Condition>

              <Condition
                match={
                  variant === 'primary' &&
                  Boolean(additionalservice?.title) &&
                  Boolean(additionalservice?.price)
                }
              >
                <AdditionalService
                  isAdditionalService={isAdditionalService}
                  setIsAdditionalService={setIsAdditionalService}
                  additionalservice={additionalservice as RequiredAdditionalService}
                />
              </Condition>
            </Column>

            <SignupButtonPart
              radius={radius}
              serviceName={serviceName}
              setVisible={setVisible}
              serviceVar={serviceVar}
              signUp={signUp}
              servicePrice={servicePrice}
              onCarBody={onCarBody}
            />
          </Column>
        </Row>
      </Box>
    </>
  )
}
