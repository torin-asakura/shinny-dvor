import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { Children }        from 'react'
import { useState }        from 'react'
import { useEffect }       from 'react'
import { createPortal }    from 'react-dom'

const Renderer = ({ children, active }) => {
  const [doc, setDoc] = useState<any>(null)

  useEffect(() => {
    setDoc(document)
  }, [])

  return doc?.body
    ? createPortal(
        <>
          {Children.map(children, (child) => (
            <AnimatePresence>{active && child}</AnimatePresence>
          ))}
        </>,
        (doc as any).body
      )
    : null
}

export { Renderer }
