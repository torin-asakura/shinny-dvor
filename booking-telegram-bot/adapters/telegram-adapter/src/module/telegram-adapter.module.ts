import { Module } from '@nestjs/common'

@Module({})
export class TelegramAdapterModule {
  static register() {
    console.log('register module')

    return {
      global: true,
      module: TelegramAdapterModule,
    }

    // client.on('msg.text', (update) => {
    //   return update.msg?.reply('I hear You!')
    // })
    //
    // client.run()
  }
}
