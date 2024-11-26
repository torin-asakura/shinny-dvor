import type { Provider } from '@nestjs/common'

export const pricesInfrastructureProviders: Array<Provider> = [
  {
    provide: PricesPort,
    useClass: PricesPortImpl,
  },
]
