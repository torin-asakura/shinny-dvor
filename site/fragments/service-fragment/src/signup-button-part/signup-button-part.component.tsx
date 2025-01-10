import type { FC }                    from 'react'

import type { SignupButtonPartProps } from './signup-button-part.interface.js'

import React                          from 'react'

import { Button }                     from '@ui/button'
import { Box }                        from '@ui/layout'
import { Text }                       from '@ui/text'
import { Space }                      from '@ui/text'
import { Ruble }                      from '@ui/text'

export const SignupButtonPart: FC<SignupButtonPartProps> = ({
  radius,
  setVisible,
  serviceVar,
  signUp,
  servicePrice,
  onCarBody,
  serviceName,
}) => (
  <Box width='100%' height={48}>
    <Button
      style={{ width: '100%' }}
      onClick={() => {
        setVisible(true)
        serviceVar({ radius, carBody: onCarBody, serviceName: serviceName || '' })
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
)
