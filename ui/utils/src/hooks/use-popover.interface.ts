import type { ReactPortal }     from 'react'
import type { SetStateAction }  from 'react'
import type { PLACEMENT_TYPES } from 'react-laag'
import type { TriggerProps }    from 'react-laag'
import type { LayerProps }      from 'react-laag'

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

type PlacementType = ArrayElement<typeof PLACEMENT_TYPES>

export type UsePopoverType = (
  placement: PlacementType,
  offset: number,
  trigger: string
) => {
  triggerProps: TriggerProps | false
  layerProps: LayerProps
  render: (children: JSX.Element) => ReactPortal | null
  isOpen: boolean
  setOpen: (value: SetStateAction<boolean>) => void
}

export type SetTriggerType = (value: string) => TriggerProps | false
