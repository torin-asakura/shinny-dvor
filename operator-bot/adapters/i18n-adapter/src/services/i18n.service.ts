import { Injectable }  from '@nestjs/common'

import { I18nContext } from 'nestjs-i18n'
import { I18nService } from 'nestjs-i18n'

@Injectable()
class I18nAdapterService {
  constructor(private readonly i18n: I18nService) {}

  get newAppointmentOperatorMessage(): string {
    return this.getMessage('operator-messages.new-appointment')
  }

  get messageReceivedToOperatorClientMessage(): string {
    return this.getMessage('client-messages.message-received-to-operator')
  }

  getWelcome(): string {
    return this.getMessage('common.welcome')
  }

  getCarBodyTitle(): string {
    return this.getMessage('titles.carBody')
  }

  getRadiiTitle(): string {
    return this.getMessage('titles.radii')
  }

  getServiceTitle(): string {
    return this.getMessage('titles.service')
  }

  getSelectedDateTitle(): string {
    return this.getMessage('titles.selectedDate')
  }

  getCommentaryTitle(): string {
    return this.getMessage('titles.commentary')
  }

  getError_access(): string {
    return this.getMessage('error.access')
  }

  get cancelAppointmentOperatorButton(): string {
    return this.getMessage('operator-buttons.cancel-appointment')
  }

  get confirmAppointmentOperatorButton(): string {
    return this.getMessage('operator-buttons.confirm-appointment')
  }

  get cancelAppointmentClientMessage(): string {
    return this.getMessage('client-messages.cancel-appointment')
  }

  get confirmAppointmentClientMessage(): string {
    return this.getMessage('client-messages.confirm-appointment')
  }

  private getMessage(messagePath: string): string {
    const lang = I18nContext?.current()?.lang
    return this.i18n.t(messagePath, { lang })
  }
}

export { I18nAdapterService }
