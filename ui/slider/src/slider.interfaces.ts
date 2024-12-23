import { Dispatch }                                    from 'react'
import { PropsWithChildren }                 from 'react'
import { SetStateAction } from 'react'
// @ts-expect-error
import { Swiper }                                      from 'swiper'

export interface SliderProps extends PropsWithChildren {
  onSwiper: Dispatch<SetStateAction<Swiper | null>>
}
