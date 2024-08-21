import type { ButtonProps }               from '@atls-ui-parts/button'
import type { FC }                        from 'react'
import type { ForwardRefExoticComponent } from 'react'

export type CreatePreventDefaultType = (Button: FC<ButtonProps>) => ForwardRefExoticComponent<any>
