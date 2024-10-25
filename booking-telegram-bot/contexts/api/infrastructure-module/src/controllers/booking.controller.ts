import { Controller }     from '@nestjs/common'
import { Body }           from '@nestjs/common'
import { Post }           from '@nestjs/common'
import { HttpStatus }     from '@nestjs/common'
import { HttpException }  from '@nestjs/common'

import { BookingService } from '../services/index.js'

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async writeData(@Body() body: Body): Promise<number> {
    try {
      return await this.bookingService.writeData(body)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw new HttpException('Interfnal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
