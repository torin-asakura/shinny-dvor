import { Injectable }  from '@nestjs/common'
import { I18nContext } from 'nestjs-i18n'
import { I18nService } from 'nestjs-i18n'

@Injectable()
class I18nAdapterService {
  constructor(private readonly i18n: I18nService) {}

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

  private getMessage(messagePath: string): string {
    const lang = I18nContext?.current()?.lang
    return this.i18n.t(messagePath, { lang })
  }
}

export { I18nAdapterService }
