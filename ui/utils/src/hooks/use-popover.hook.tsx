import type { UsePopoverType } from './use-popover.interface.js'
import type { SetTriggerType } from './use-popover.interface.js'

import { useState }            from 'react'
import { useLayer }            from 'react-laag'

const usePopover: UsePopoverType = (placement, offset = 9, trigger = 'click') => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const close = (): void => {
    setIsOpen(false)
  }

  const { layerProps, triggerProps, renderLayer } = useLayer({
    isOpen,
    placement,
    auto: true,
    onOutsideClick: close,
    onDisappear: close,
    triggerOffset: offset,
  })

  const setTrigger: SetTriggerType = (value) => {
    const handleClick = (): void => {
      setIsOpen(!isOpen)
    }

    const handleMouseEnter = (): void => {
      setIsOpen(true)
    }

    const handlerMouseLeave = (): void => {
      setIsOpen(false)
    }

    if (value === 'click') {
      return { ...triggerProps, onClick: handleClick }
    }

    if (value === 'hover') {
      return {
        ...triggerProps,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handlerMouseLeave,
      }
    }

    return false
  }

  const render = (children: JSX.Element): ReturnType<typeof renderLayer> =>
    renderLayer(isOpen && children)

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
    setOpen: setIsOpen,
  }
}

export { usePopover }
