import type { RendererProps }     from './renderer.interfaces.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'
import { AnimatePresence }        from 'framer-motion'
import { Children }               from 'react'
import { useState }               from 'react'
import { useEffect }              from 'react'
import { createPortal }           from 'react-dom'

export const Renderer: FC<PropsWithChildren<RendererProps>> = ({ children, active }) => {
  const [doc, setDoc] = useState<any>(null)

  useEffect(() => {
    setDoc(document)
  }, [])

  return doc?.body
    ? createPortal(
        <>
          {Children.map(children as JSX.Element, (child: JSX.Element) => (
            <AnimatePresence>{active && child}</AnimatePresence>
          ))}
        </>,
        doc.body
      )
    : null
}
