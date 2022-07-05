import { faker }    from '@faker-js/faker'

import { Services } from './services.interface'

const servicesMock: Services[] = [...Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  serviceName: faker.lorem.words(),
  price: faker.commerce.price(290, 5600, 0),
}))

export { servicesMock }
