import type { OnModuleInit }                                from '@nestjs/common'

import { Injectable }                                       from '@nestjs/common'

import { OnTgsnakeCommandService }                          from '@booking-telegram-bot/tgsnake-adapter'
import { AppointmentConversationSendStartMessageUseCase }   from '@telegram-bot/application-module'
import { AppointmentConversationCreateConversationUseCase } from '@telegram-bot/application-module'
import { AppointmentConversationGetDateUseCase }            from '@telegram-bot/application-module'
import { AppointmentConversationGetTimeSlotUseCase }        from '@telegram-bot/application-module'
import { AppointmentConversationGetCarBodyUseCase }         from '@telegram-bot/application-module'
import { AppointmentConversationGetRadiiUseCase }           from '@telegram-bot/application-module'
import { AppointmentConversationGetServicesUseCase }        from '@telegram-bot/application-module'
import { AppointmentConversationGetCommentaryUseCase }      from '@telegram-bot/application-module'
import { AppointmentConversationGetApprovalUseCase }        from '@telegram-bot/application-module'
import { AppointmentConversationSendEndMessageUseCase }     from '@telegram-bot/application-module'
import { AppointmentConversationRemoveConversationUseCase } from '@telegram-bot/application-module'
import { AppointmentConversationCatchErrorUseCase }         from '@telegram-bot/application-module'
import { AppointmentEntityRepository }                      from '@telegram-bot/application-module'
import { NotifyOperatorUseCase }                            from '@telegram-bot/application-module'
// TODO move it into that layer (infra)
import { getUserFullName }                                  from '@telegram-bot/application-module/getters'
// TODO move it into that layer (infra)
import { getFormattedAppointmentData }                      from '@telegram-bot/application-module/getters'

@Injectable()
export class CreateAppointmentCommandProcessor implements OnModuleInit {
  constructor(
    private readonly appointmentEntityRepository: AppointmentEntityRepository,
    private readonly onTgsnakeCommandService: OnTgsnakeCommandService,
    private readonly appointmentConversationSendStartMessageUseCase: AppointmentConversationSendStartMessageUseCase,
    private readonly appointmentConversationCreateConversationUseCase: AppointmentConversationCreateConversationUseCase,
    private readonly appointmentConversationGetDateUseCase: AppointmentConversationGetDateUseCase,
    private readonly appointmentConversationGetTimeSlotUseCase: AppointmentConversationGetTimeSlotUseCase,
    private readonly appointmentConversationGetCarBodyUseCase: AppointmentConversationGetCarBodyUseCase,
    private readonly appointmentConversationGetRadiiUseCase: AppointmentConversationGetRadiiUseCase,
    private readonly appointmentConversationGetServicesUseCase: AppointmentConversationGetServicesUseCase,
    private readonly appointmentConversationGetCommentaryUseCase: AppointmentConversationGetCommentaryUseCase,
    private readonly appointmentConversationGetApprovalUseCase: AppointmentConversationGetApprovalUseCase,
    private readonly appointmentConversationSendEndMessageUseCase: AppointmentConversationSendEndMessageUseCase,
    private readonly appointmentConversationRemoveConversationUseCase: AppointmentConversationRemoveConversationUseCase,
    private readonly appointmentConversationCatchErrorUseCase: AppointmentConversationCatchErrorUseCase,
    private readonly notifyOperatorUseCase: NotifyOperatorUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_createAppointment()
  }

  private async processCommand_createAppointment(): Promise<void> {
    this.onTgsnakeCommandService.process('create_appointment', async (ctx) => {
      try {
        // TODO appointment-conversation по частям и вызывать отсюда
        // TODO trycatch

        const conversation = this.appointmentConversationCreateConversationUseCase.process(ctx)

        await this.appointmentConversationSendStartMessageUseCase.process(ctx)

        const selectedDate = await this.appointmentConversationGetDateUseCase.process(
          ctx,
          conversation
        )

        const selectedTimeSlot = await this.appointmentConversationGetTimeSlotUseCase.process(
          ctx,
          conversation,
          selectedDate.milliseconds
        )

        const selectedCarBody = await this.appointmentConversationGetCarBodyUseCase.process(
          ctx,
          conversation
        )

        const selectedRadii = await this.appointmentConversationGetRadiiUseCase.process(
          ctx,
          conversation
        )

        const selectedService = await this.appointmentConversationGetServicesUseCase.process(
          ctx,
          conversation
        )

        const selectedCommentary = await this.appointmentConversationGetCommentaryUseCase.process(
          ctx,
          conversation
        )

        // TODO get telegram phone - optional
        const userFullName = getUserFullName(ctx.userFirstName, ctx.userLastName)

        const appointmentData = {
          service: selectedService,
          radii: selectedRadii,
          carBody: selectedCarBody,
          timeSlot: selectedTimeSlot,
          // selectedDate,
          commentary: selectedCommentary,
        }

        const formattedConversationData = getFormattedAppointmentData(
          appointmentData,
          ctx.userId,
          userFullName
        )

        // TODO format appointment data
        await this.appointmentConversationGetApprovalUseCase.process(
          ctx,
          conversation,
          appointmentData
        )

        await this.appointmentEntityRepository.writeData(formattedConversationData)

        await this.appointmentConversationSendEndMessageUseCase.process(ctx)

        await this.notifyOperatorUseCase.process(formattedConversationData)

        this.appointmentConversationRemoveConversationUseCase.process(ctx)
      } catch (error) {
        await this.appointmentConversationCatchErrorUseCase.process(ctx, error as Error)
      }
    })
  }
}
