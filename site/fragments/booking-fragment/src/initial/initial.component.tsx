import { useReactiveVar }   from '@apollo/client'

import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { SUCCESS }          from '@store/booking'
import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { Input }            from '@ui/input'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Select }           from '@ui/select'
import { Text }             from '@ui/text'
import { extractFragment }  from '@globals/data'
import { extractFragments } from '@globals/data'
import { screenVar }        from '@store/booking'
import { activeCarBodyVar } from '@store/booking'
import { activeRadiusVar }  from '@store/booking'

import { RadioList }        from '../radio-list'
import { InitialProps }     from './initial.interface'

const Initial: FC<InitialProps> = ({
  fragmentsData,
  availableRadiiData,
  carBodiesData,
  servicesData,
}) => {
  // TODO write correct conditions for updateStatus
  const updateStatus = () => screenVar(SUCCESS)

  const activeRadius = useReactiveVar<boolean>(activeRadiusVar)
  const activeCarBody = useReactiveVar<boolean>(activeCarBodyVar)

  const [comment, setComment] = useState<string>('')
  const [selectedRadius, setSelectedRadius] = useState<string>('')
  const [selectedCarBody, setSelectedCarBody] = useState<string>('')
  const [selectedRepairTypes, setSelectedRepairTypes] = useState<string[]>([])

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

  const radii = extractFragments('radius', 'contentAddons', availableRadiiData)
  const radiiItems = radii.map((item) => item.contentAddons.title)

  const carBodies = extractFragments('car-body-item', 'contentAddons', carBodiesData)
  const carBodyItems = carBodies.map((item) => item.contentAddons.title)

  const repairTypes = extractFragments('service-item', 'servicesParams', servicesData)
  const repairTypeItems = repairTypes.map((item) => item.servicesParams.title)

  return (
    <Column width='100%'>
      <Layout flexBasis={[40, 40, 44]} />
      <Layout>
        <Text fontSize='giant' fontWeight='medium'>
          {signUpTitle}
        </Text>
      </Layout>
      <Layout flexBasis={32} />
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
        width={['18%', '8%', '8%']}
        id='radius'
      />
      <Layout flexBasis={20} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          {carBodyTitle}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <RadioList
        items={carBodyItems}
        selectedItem={selectedCarBody}
        setSelectedItem={setSelectedCarBody}
        width={161}
        id='carBody'
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
        <Input value={comment} onChange={setComment} placeholder={commentPlaceholder} />
      </Layout>
      <Layout flexBasis={32} />
      <Box width='100%'>
        <Button
          disabled={!activeRadius || !activeCarBody || !selectedRepairTypes.length}
          onClick={updateStatus}
        >
          {signUpTitle}
        </Button>
      </Box>
      <Layout flexBasis={[48, 48, 128]} />
    </Column>
  )
}

export { Initial }
