import { Injectable } from '@nestjs/common'

import { YandexXml }  from '../aggregates/index.js'

@Injectable()
export class YandexXmlFactory {
  create(): YandexXml {
    return new YandexXml()
  }
}
