import { Controller } from '@nestjs/common'
import { Get }        from '@nestjs/common'

@Controller('test')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats'
  }
}
