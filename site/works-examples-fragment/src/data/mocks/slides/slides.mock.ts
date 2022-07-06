import { faker } from '@faker-js/faker'

import { Slide } from './slide.interface'

const slidesMock: Slide[] = [...Array(5)].map(() => ({
  id: faker.datatype.uuid(),
  image: faker.image.transport(960, 960, true),
  price: faker.commerce.price(290, 3990),
  description: faker.lorem.words(),
  alt: faker.lorem.words(),
  timeOfExecution: 1,
}))

export { slidesMock }
