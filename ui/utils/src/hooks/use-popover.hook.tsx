import type { UsePopoverType } from './use-popover.interface.js'
import type { SetTriggerType } from './use-popover.interface.js'

import { useState }            from 'react'
import { useLayer }            from 'react-laag'

const usePopover: UsePopoverType = (placement, offset = 9, trigger = 'click') => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const close = () => setOpen(false)

  const { layerProps, triggerProps, renderLayer } = useLayer({
    isOpen,
    placement,
    auto: true,
    onOutsideClick: close,
    onDisappear: close,
    triggerOffset: offset,
  })

  const setTrigger: SetTriggerType = (value) => {
    if (value === 'click') {
      return { ...triggerProps, onClick: () => setOpen(!isOpen) }
    }
    if (value === 'hover') {
      return {
        ...triggerProps,
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      }
    }

    return false
  }

  const render = (children: JSX.Element) => renderLayer(isOpen && children)

  return {
    triggerProps: setTrigger(trigger),
    layerProps: {
      ...layerProps,
      style: {
        ...layerProps.style,
        zIndex: 3000,
      },
    },
    render,
    isOpen,
    setOpen,
  }
}

export { usePopover }
