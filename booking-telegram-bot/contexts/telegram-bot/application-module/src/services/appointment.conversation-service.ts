import { Injectable }                               from '@nestjs/common'
// TODO for what?
import { Logger }                                   from '@nestjs/common'

import { TelegramClientPort }                       from '../ports/index.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT }           from './appointment.constants.js'
import { CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT }  from './appointment.constants.js'
import { APPROVE_APPOINTMENT_BUTTON_TEXT }          from './appointment.constants.js'
import { EDIT_APPOINTMENT_BUTTON_TEXT }             from './appointment.constants.js'
import { AppointmentGetCarBodyConversationPart }    from './appointment.get-car-body.conversation-part.js'
import { AppointmentGetCommentaryConversationPart } from './appointment.get-commentary.conversation-part.js'
import { AppointmentGetDateConversationPart }       from './appointment.get-date.conversation-part.js'
import { AppointmentGetRadiiConversationPart }      from './appointment.get-radii.conversation-part.js'
import { AppointmentGetServicesConversationPart }   from './appointment.get-services.conversation-part.js'
import { AppointmentGetTimeSlotConversationPart }   from './appointment.get-time-slot.conversation-part.js'

@Injectable()
export class AppointmentConversationService {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly appointmentGetDateConversationPart: AppointmentGetDateConversationPart,
    private readonly appointmentGetTimeSlotConversationPart: AppointmentGetTimeSlotConversationPart,
    private readonly appointmentGetCarBodyConversationPart: AppointmentGetCarBodyConversationPart,
    private readonly appointmentGetRadiiConversationPart: AppointmentGetRadiiConversationPart,
    private readonly appointmentGetServicesConversationPart: AppointmentGetServicesConversationPart,
    private readonly appointmentGetCommentaryConversationPart: AppointmentGetCommentaryConversationPart
  ) {}

  // TODO inteface
  async process(ctx: any) {
    try {
      // TODO type
      const appointmentData: Record<string, any> = {}
      await this.telegramClient.sendMessage(ctx, 'Начало диалога в use case')

      const appointmentConversation = await this.telegramClient.createConversation(ctx)
      appointmentConversation.data = {}

      await this.appointmentGetDateConversationPart.sendQuestion(ctx)
      await appointmentConversation.wait('msg.text', (ctx) => {
        const checkAnswerResult = this.appointmentGetDateConversationPart.checkAnswer(ctx)
        if (checkAnswerResult) {
          appointmentConversation.data.selectedDay = checkAnswerResult
        }

        return Boolean(checkAnswerResult)
      })

      await this.appointmentGetTimeSlotConversationPart.sendQuestion(
        ctx,
        appointmentConversation.data.selectedDay
      )

      await appointmentConversation.wait('msg.text', (ctx) => {
        const checkAnswerResult = this.appointmentGetTimeSlotConversationPart.checkAnswer(ctx)
        if (checkAnswerResult) {
          appointmentConversation.data.selectedDay = checkAnswerResult
        }

        return Boolean(checkAnswerResult)
      })

      await this.appointmentGetCarBodyConversationPart.sendQuestion(ctx)

      // TODO check interfaces
      await appointmentConversation.wait('msg.text', (ctx) => {
        const checkAnswerResult = this.appointmentGetCarBodyConversationPart.checkAnswer(ctx)
        if (checkAnswerResult) {
          appointmentConversation.data.selectedCarBody = checkAnswerResult
        }

        return Boolean(checkAnswerResult)
      })

      await this.appointmentGetRadiiConversationPart.sendQuestion(ctx)

      await appointmentConversation.wait('msg.text', (ctx) => {
        const checkAnswerResult = this.appointmentGetRadiiConversationPart.checkAnswer(ctx)
        if (checkAnswerResult) {
          appointmentConversation.data.selectedRadii = checkAnswerResult
        }

        return Boolean(checkAnswerResult)
      })

      await this.appointmentGetServicesConversationPart.sendQuestion(ctx)

      await appointmentConversation.wait('msg.text', (ctx) => {
        const checkAnswerResult = this.appointmentGetServicesConversationPart.checkAnswer(ctx)
        if (checkAnswerResult) {
          appointmentConversation.data.selectedService = checkAnswerResult
        }

        return Boolean(checkAnswerResult)
      })

      await this.appointmentGetCommentaryConversationPart.sendQuestion(ctx)

      await appointmentConversation.wait('msg.text', (ctx) => {
        const checkAnswerResult = this.appointmentGetCommentaryConversationPart.checkAnswer(ctx)
        if (checkAnswerResult && checkAnswerResult !== ' ') {
          appointmentConversation.data.selectedRadii = checkAnswerResult
        }

        return Boolean(checkAnswerResult)
      })

      console.log(appointmentData)

      // const { carBodyTitle, radiiTitle, serviceTitle, commentary, selectedTimeSlot } =
      //   appointmentData

      // const selectedTimeDate = new Date(selectedTimeSlot.milliseconds)
      // let selectedDateText = selectedTimeDate.toLocaleDateString('ru-RU', {
      //   weekday: 'long',
      //   month: 'long',
      //   day: 'numeric',
      //   hour: '2-digit',
      //   minute: '2-digit',
      // })

      let approvalMessage = ''
      approvalMessage += `Тип кузова: ${carBodyTitle}\n`
      approvalMessage += `Диаметр колёс: ${radiiTitle}\n`
      approvalMessage += `Тип ремонта: ${serviceTitle}\n`
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

      this.telegramClient.removeappointment(ctx)
    } catch (error) {
      // TODO что за класс Logger
      // если он пишет логи, то в случае ошибок нужно использовать его
      console.error(error)

      // TODO more details on error???
      await this.telegramClient.sendMessage(ctx, 'На сервере произошла ошибка')
    }
  }
}
