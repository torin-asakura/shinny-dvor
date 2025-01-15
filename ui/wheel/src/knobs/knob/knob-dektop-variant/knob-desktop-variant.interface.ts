import type { usePopover } from '@ui/utils'

export interface KnobDesktopVariantProps {
  triggerProps: ReturnType<typeof usePopover>['triggerProps']
  hover: boolean
  render: ReturnType<typeof usePopover>['render']
  layerProps: ReturnType<typeof usePopover>['layerProps']
  text?: string
}
