import type { QueryClientPort }        from '@query-client/application-module'

import { Injectable }                  from '@nestjs/common'

import { GetCarBodyTitlesUseCase }     from '@booking-telegram-bot/apollo-adapter'
import { GetRadiiTitlesUseCase }       from '@booking-telegram-bot/apollo-adapter'
import { GetServiceTitlesUseCase }     from '@booking-telegram-bot/apollo-adapter'
import { GetWorkTimeRawStringUseCase } from '@booking-telegram-bot/apollo-adapter'

@Injectable()
export class QueryClientPortImpl implements QueryClientPort {
  constructor(
    private readonly getCarBodyTitlesUseCase: GetCarBodyTitlesUseCase,
    private readonly getRadiiTitlesUseCase: GetRadiiTitlesUseCase,
    private readonly getServiceTitlesUseCase: GetServiceTitlesUseCase,
    private readonly getWorkTimeRawStringUseCase: GetWorkTimeRawStringUseCase
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
