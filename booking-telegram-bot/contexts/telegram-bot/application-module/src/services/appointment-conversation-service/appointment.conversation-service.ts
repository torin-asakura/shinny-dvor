import type { AppointmentConversationDataType }     from './appointment.interfaces.js'

import { Injectable }                               from '@nestjs/common'
// TODO for what?
import { Logger }                                   from '@nestjs/common'

import { TelegramClientPort }                       from '../../ports/index.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT }           from './appointment.constants.js'
import { CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT }  from './appointment.constants.js'
import { APPROVE_APPOINTMENT_BUTTON_TEXT }          from './appointment.constants.js'
import { EDIT_APPOINTMENT_BUTTON_TEXT }             from './appointment.constants.js'
import { AppointmentGetCommentaryConversationPart } from './conversation-parts/index.js'
import { AppointmentGetDateConversationPart }       from './conversation-parts/index.js'
import { AppointmentGetRadiiConversationPart }      from './conversation-parts/index.js'
import { AppointmentGetServiceConversationPart }    from './conversation-parts/index.js'
import { AppointmentGetTimeSlotConversationPart }   from './conversation-parts/index.js'
import { AppointmentGetCarBodyConversationPart }    from './conversation-parts/index.js'

@Injectable()
export class AppointmentConversationService {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly appointmentGetDateConversationPart: AppointmentGetDateConversationPart,
    private readonly appointmentGetTimeSlotConversationPart: AppointmentGetTimeSlotConversationPart,
    private readonly appointmentGetCarBodyConversationPart: AppointmentGetCarBodyConversationPart,
    private readonly appointmentGetRadiiConversationPart: AppointmentGetRadiiConversationPart,
    private readonly appointmentGetServicesConversationPart: AppointmentGetServiceConversationPart,
    private readonly appointmentGetCommentaryConversationPart: AppointmentGetCommentaryConversationPart
  ) {}

  // TODO inteface
  async process(ctx: any) {
    try {
      // TODO type
      // const appointmentData: Record<string, any> = {}
      await this.telegramClient.sendMessage(ctx, 'Начало диалога в use case')

      const appointmentConversation: {
        data: AppointmentConversationDataType
      } = await this.telegramClient.createConversation(ctx)

      appointmentConversation.data = {}

      await this.appointmentGetCommentaryConversationPart.process(ctx, appointmentConversation)

      console.log(appointmentConversation.data)

      await this.appointmentGetDateConversationPart.process(ctx, appointmentConversation)
      await this.appointmentGetTimeSlotConversationPart.process(ctx, appointmentConversation, {
        questionData: appointmentConversation.data.date.milliseconds,
      })
      await this.appointmentGetCarBodyConversationPart.process(ctx, appointmentConversation)
      await this.appointmentGetRadiiConversationPart.process(ctx, appointmentConversation)
      await this.appointmentGetServicesConversationPart.process(ctx, appointmentConversation)

      const { carBody, radii, service, commentary, timeSlot } = appointmentConversation.data

      const selectedTimeDate = new Date(timeSlot.milliseconds)
      let selectedDateText = selectedTimeDate.toLocaleDateString('ru-RU', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })

      let approvalMessage = ''
      approvalMessage += `Тип кузова: ${carBody}\n`
      approvalMessage += `Диаметр колёс: ${radii}\n`
      approvalMessage += `Тип ремонта: ${service}\n`
      approvalMessage += `Выбранная дата: ${selectedDateText}\n`
      if (commentary) approvalMessage += `Комментарий: ${commentary}`

      await this.telegramClient.sendMessageWithMarkup(ctx, approvalMessage, [
        APPROVE_APPOINTMENT_BUTTON_TEXT,
        EDIT_APPOINTMENT_BUTTON_TEXT,
        CANCEL_APPOINTMENT_BUTTON_TEXT,
      ])

      await appointmentConversation.wait('msg.text', ({ message }) => {
        const { text: responseText } = message

        // TODO switch case
        if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
          console.log('cancel appointment')
        } else if (responseText === APPROVE_APPOINTMENT_BUTTON_TEXT) {
          return true
        } else if (responseText === EDIT_APPOINTMENT_BUTTON_TEXT) {
          this.process(ctx)
          return false
        }

        return false
      })

      // TODO Q: name? - save it from context
      // TODO Q: phone? - есть кнопка в telegram api - типо поделиться контактом - сделать опциональной

      // TODO запись в бд

      await this.telegramClient.sendMessage(
        ctx,
        'ссылки на оператора (другой чат), скрыть клавиатуру'
      )

      this.telegramClient.removeConversation(ctx)
    } catch (error) {
      // TODO что за класс Logger
      // если он пишет логи, то в случае ошибок нужно использовать его
      console.error(error)

      // TODO more details on error???
      await this.telegramClient.sendMessage(ctx, 'На сервере произошла ошибка')
    }
  }
}
