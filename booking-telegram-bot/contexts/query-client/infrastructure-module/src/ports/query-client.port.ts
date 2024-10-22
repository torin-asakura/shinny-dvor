import type { QueryClientPort }        from '@query-client/application-module'

import { Injectable }                  from '@nestjs/common'

import { GetCarBodyTitlesService }     from '@booking-telegram-bot/apollo-adapter'
import { GetRadiiTitlesService }       from '@booking-telegram-bot/apollo-adapter'
import { GetServiceTitlesService }     from '@booking-telegram-bot/apollo-adapter'
import { GetWorkTimeRawStringService } from '@booking-telegram-bot/apollo-adapter'

@Injectable()
export class QueryClientPortImpl implements QueryClientPort {
  constructor(
    private readonly getCarBodyTitlesUseCase: GetCarBodyTitlesService,
    private readonly getRadiiTitlesUseCase: GetRadiiTitlesService,
    private readonly getServiceTitlesUseCase: GetServiceTitlesService,
    private readonly getWorkTimeRawStringUseCase: GetWorkTimeRawStringService
  ) {}

  async getCarBodyTitles(): Promise<Array<string>> {
    return this.getCarBodyTitlesUseCase.process()
  }

  async getRadiiTitles(): Promise<Array<string>> {
    return this.getRadiiTitlesUseCase.process()
  }

  async getServiceTitles(): Promise<Array<string>> {
    return this.getServiceTitlesUseCase.process()
  }

  async getWorkTimeRawString(): Promise<string> {
    return this.getWorkTimeRawStringUseCase.process()
  }
}
