import type { RendererProps } from './renderer.interfaces.js'

import { AnimatePresence }    from 'framer-motion'
import { Children }           from 'react'
import { memo }               from 'react'
import { useState }           from 'react'
import { useEffect }          from 'react'
import { createPortal }       from 'react-dom'
import React                  from 'react'

export const Renderer = memo(({ children, active }: RendererProps) => {
  const [doc, setDoc] = useState<Document | null>(null)

  useEffect(() => {
    setDoc(document)
  }, [])

  return doc?.body
    ? createPortal(
        <>
          {Children.map(children, (child) => {
            if (active) return <AnimatePresence>{child}</AnimatePresence>
            return null
          })}
        </>,
        doc.body
      )
    : null
})
