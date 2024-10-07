/* eslint-disable */

import type { ReactiveVar }         from '@apollo/client'
import type { Service as IService } from '@store/services'
import type { KeyboardEvent }       from 'react'
import type { FC }                  from 'react'

import type { InitialProps }        from './initial.interface.js'

import { useReactiveVar }           from '@apollo/client'
import { useCallback }              from 'react'
import { useEffect }                from 'react'
import { useState }                 from 'react'
import React                        from 'react'

import { INVALID }                  from '@store/booking'
import { SUCCESS }                  from '@store/booking'
import { Button }                   from '@ui/button'
import { Divider }                  from '@ui/divider'
import { Input }                    from '@ui/input'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Select }                   from '@ui/select'
import { Switch }                   from '@ui/switch'
import { Item }                     from '@ui/switch'
import { Text }                     from '@ui/text'
import { extractFragment }          from '@globals/data'
import { extractFragments }         from '@globals/data'
import { doNothing }                from '@shared/utils'
import { screenVar }                from '@store/booking'
import { serviceVar }               from '@store/services'

import { RadioList }                from '../radio-list/index.js'
import { useSubmit }                from '../data/index.js'

const Initial: FC<InitialProps> = ({
  fragmentsData,
  availableRadiiData,
  carBodiesData,
  servicesData,
  additionalService,
}) => {
  const service = useReactiveVar<IService>(serviceVar)

  const carBodies = extractFragments('car-body-item', 'contentAddons', carBodiesData)
  // @ts-expect-error any type
  const carBodyItems = carBodies.map((item) => item.contentAddons.title)

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [selectedRadius, setSelectedRadius] = useState<string>(service.radius || '')
  const [selectedCarBody, setSelectedCarBody] = useState<string>(service.carBody || carBodyItems[0])
  const [selectedRepairTypes, setSelectedRepairTypes] = useState<Array<string>>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const signUpTitle = extractFragment('contentAddons', 'sign-up', fragmentsData).title
  const wheelDiameterTitle = extractFragment('contentAddons', 'wheel-diameter', fragmentsData).title
  const carBodyTitle = extractFragment('contentAddons', 'car-body', fragmentsData).title
  const { title: repairTypeTitle, content: repairTypePlaceholder } = extractFragment(
    'contentAddons',
    'repair-type',
    fragmentsData
  )
  const { title: commentTitle, content: commentPlaceholder } = extractFragment(
    'contentAddons',
    'comment',
    fragmentsData
  )
  const { title: yourName, content: yourNamePlaceholder } = extractFragment(
    'contentAddons',
    'your-username',
    fragmentsData
  )
  const { title: yourPhone, content: yourPhonePlaceholder } = extractFragment(
    'contentAddons',
    'your-phone',
    fragmentsData
  )

  const radii = extractFragments('radius', 'contentAddons', availableRadiiData)
  // @ts-expect-error any type
  const radiiItems = radii.map((item) => item.contentAddons.title.toLowerCase())

  const repairTypes = extractFragments('service-item', 'servicesParams', servicesData)
  // @ts-expect-error any type
  const repairTypeItems = repairTypes.map((item) => item.servicesParams.title)

  const isFormFilled =
    !name.trim() ||
    !phone.trim() ||
    !selectedRadius ||
    !selectedCarBody ||
    !selectedRepairTypes.length

  const [submit, data] = useSubmit()

  const submitForm = () => {
    if (selectedRadius && selectedCarBody && selectedRepairTypes.length) {
      submit({
        variables: {
          name,
          phone,
          diameter: selectedRadius,
          carBody: selectedCarBody,
          typeRepair: selectedRepairTypes.join(', '),
          additionalService: typeof additionalService === 'string' ? additionalService : '',
          comment,
        },
      })
    }
  }

  const updateStatus = useCallback(
    (success: IService) => {
      if (success) {
        screenVar(SUCCESS)
        serviceVar({ ...service, radius: '', serviceName: '' })
      } else screenVar(INVALID)
    },
    [service]
  )

  useEffect(() => {
    if (data) {
      updateStatus(data.submitForm.success)
    }
  }, [data, submit, updateStatus])

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    const correctChars = ['+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    if (!correctChars.includes(event.key)) {
      event.preventDefault()
    }
  }

  const validatePhone = (value: string) => {
    if (value.length > 12 && value.startsWith('+7', 0)) {
      doNothing()
    } else if (value.length >= 12 && !value.startsWith('+7', 0)) {
      doNothing()
    } else {
      setPhone(value)
    }
  }

  return (
    <Column width='100%'>
      <Layout flexBasis={[40, 40, 44]} />
      <Layout>
        <Text fontSize='giant' fontWeight='medium'>
          {signUpTitle}
        </Text>
      </Layout>
      <Layout flexBasis={32} />
      <Box width='100%' flexDirection={['column', 'column', 'row']}>
        <Column fill>
          <Layout>
            <Text lineHeight='grown' color='darkGray'>
              {yourName}
            </Text>
          </Layout>
          <Layout flexBasis={12} />
          <Layout>
            <Input
              maxLength={12}
              value={name}
              placeholder={yourNamePlaceholder}
              onChange={setName}
            />
          </Layout>
        </Column>
        <Layout flexBasis={32} flexShrink={0} />
        <Column fill>
          <Layout>
            <Text lineHeight='grown' color='darkGray'>
              {yourPhone}
            </Text>
          </Layout>
          <Layout flexBasis={12} />
          <Layout>
            <Input
              value={phone}
              placeholder={yourPhonePlaceholder}
              onChange={(value) => {
                validatePhone(value)
              }}
              onKeyPress={handleKeyPress}
            />
          </Layout>
        </Column>
      </Box>
      <Layout flexBasis={32} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          {carBodyTitle}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout display={['none', 'none', 'flex']}>
        <Switch active={selectedCarBody}>
          {carBodyItems.map((item: string) => (
            <Item value={item} onSelect={setSelectedCarBody}>
              {item}
            </Item>
          ))}
        </Switch>
      </Layout>
      <Layout display={['flex', 'flex', 'none']}>
        <RadioList
          items={carBodyItems}
          selectedItem={selectedCarBody}
          setSelectedItem={setSelectedCarBody}
          width={161}
        />
      </Layout>
      <Layout flexBasis={20} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          {wheelDiameterTitle}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <RadioList
        items={radiiItems}
        selectedItem={selectedRadius}
        setSelectedItem={setSelectedRadius}
        textTransform='uppercase'
        width={['18%', '8%', '8%']}
      />
      <Layout flexBasis={20} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          {repairTypeTitle}
        </Text>
      </Layout>
      <Layout flexBasis={12} />
      <Select
        items={repairTypeItems}
        value={selectedRepairTypes}
        placeholder={repairTypePlaceholder}
        setIsOpen={setIsOpen}
        // @ts-expect-error not assignable
        selectedDefault={!!service.serviceName?.length && service.serviceName}
        onSelect={setSelectedRepairTypes}
      />
      <Layout flexBasis={12} />
      <Divider backgroundColor={selectedRepairTypes.length ? 'primaryBlue' : 'gray'} />
      <Layout flexBasis={32} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          {commentTitle}
        </Text>
      </Layout>
      <Layout flexBasis={12} />
      <Layout>
        <Input value={comment} placeholder={commentPlaceholder} onChange={setComment} />
      </Layout>
      <Layout flexBasis={32} />
      <Box width='100%'>
        <Button disabled={isFormFilled} onClick={submitForm}>
          {signUpTitle}
        </Button>
      </Box>
      <Layout flexBasis={[isOpen ? 200 : 48, isOpen ? 200 : 48, isOpen ? 228 : 128]} />
    </Column>
  )
}

export { Initial }
