import { Module }                     from '@nestjs/common'
import { PricesInfrastructureModule } from '@prices/prices-infrastructure-module'

@Module({
  imports: [PricesInfrastructureModule.register()],
})
export class PricesServiceEntrypointModule {}
