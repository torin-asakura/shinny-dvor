'use client'

import type { UseScrollBlock } from './scroll-lock.interface.js'

import { useRef }              from 'react'

export const useScrollBlock: UseScrollBlock = () => {
  const scrollBlocked = useRef(false)

  if (typeof window !== 'object') return []

  const safeDocument: Document = document

  const html = safeDocument.documentElement
  const { body } = safeDocument

  const blockScroll = (): void => {
    if (!body) return
    if (!body.style) return
    if (scrollBlocked.current) return
    if (document === undefined) return

    const scrollBarWidth = window.innerWidth - html.clientWidth
    const bodyPaddingRight =
      parseInt(window.getComputedStyle(body).getPropertyValue('padding-right'), 10) || 0

    html.style.position = 'relative'
    html.style.overflow = 'hidden'
    body.style.position = 'relative'
    body.style.overflow = 'hidden'
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

    scrollBlocked.current = true
  }

  const allowScroll = (): void => {
    if (!body) return
    if (!body.style) return
    if (!scrollBlocked.current) return

    html.style.position = ''
    html.style.overflow = ''
    body.style.position = ''
    body.style.overflow = ''
    body.style.paddingRight = ''

    scrollBlocked.current = false
  }

  return [blockScroll, allowScroll]
}
