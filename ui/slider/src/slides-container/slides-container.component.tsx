import { getContentDimensions } from '@atls-ui-parts/dom'

import React                    from 'react'
import { AnimatePresence }      from 'framer-motion'
import { FC }                   from 'react'
import { motion }               from 'framer-motion'
import { useAnimation }         from 'framer-motion'
import { useEffect }            from 'react'
import { useRef }               from 'react'

import { Box }                  from '@ui/layout'

import { useStore }             from '../context'

const SlideContainer = ({ children, role }) => {
  const store = useStore()
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      const { width } = getContentDimensions(ref.current)

      store.addSlideSubscriber(async () => {
        if (role === 'active') {
          await controls.start({ x: -width, width: '15%', height: 486 })
        }

        if (role === 'next') {
          await controls.start({ x: -width, width: '70%', height: 540 })
        }

        if (role === 'prev') {
          await controls.start({ x: -width })
        }
      })
    }
  }, [])

  return (
    <motion.div ref={ref} style={{ display: 'flex' }} animate={controls}>
      {children}
    </motion.div>
  )
}

const SlidesContainer: FC = ({ children }) => {
  const store = useStore()

  return (
    <AnimatePresence>
      <Box overflow='hidden' width='100%' height={578} alignItems='center'>
        <Box width='15%' height={486} justifyContent='flex-end'>
          <SlideContainer role='prev'>{children[store.prevSlide]}</SlideContainer>
        </Box>
        <Box width='70%' justifyContent='center'>
          <SlideContainer role='active'>{children[store.active]}</SlideContainer>
        </Box>
        <Box width='15%' height={486}>
          <SlideContainer role='next'>{children[store.nextSlide]}</SlideContainer>
        </Box>
      </Box>
    </AnimatePresence>
  )
}

export { SlidesContainer }
