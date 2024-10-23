import type { DynamicModule } from '@nestjs/common'
import type { Provider }      from '@nestjs/common'

import { dirname }            from 'node:path'
import { fileURLToPath }      from 'node:url'

import { Module }             from '@nestjs/common'
import { HttpAdapterHost }    from '@nestjs/core'
import { ModuleRef }          from '@nestjs/core'
import * as path              from 'path'
import { I18nModule }         from 'nestjs-i18n'

import * as services          from '../services/index.js'

const dianemPath = dirname(fileURLToPath(import.meta.url))

@Module({})
export class I18nAdapterModule {
  // TODO resolvers не добавляю, т.к. сейчас у нас только один язык и этот функционал не требуется
  static register(): DynamicModule {
    const serviceProviders = Object.values(services)

    const providers = [...serviceProviders, HttpAdapterHost, ModuleRef as Provider]
    const exports = [...serviceProviders, HttpAdapterHost, ModuleRef]

    const watch = Boolean(process.env.ENVIRONMENT === 'dev')

    return {
      global: true,
      module: I18nAdapterModule,
      providers,
      exports,
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'ru',
          loaderOptions: {
            path: path.join(dianemPath, '../locals/'),
            watch,
          },
        }),
      ],
    }
  }
}
