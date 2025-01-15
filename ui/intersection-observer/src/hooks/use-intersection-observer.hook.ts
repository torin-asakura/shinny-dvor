/* eslint-disable */

import type { MutableRefObject }      from 'react'

import type { OnIntersection }        from './use-intersection-observer.interfaces.js'
import type { Observers }             from './use-intersection-observer.interfaces.js'
import type { IntersectionObservers } from './use-intersection-observer.interfaces.js'
import type { Observer }              from './use-intersection-observer.interfaces.js'

import { useRef }                     from 'react'

export class PageIntersectionObserver {
  private onIntersection: OnIntersection

  private observers: Observers = new Map()

  private intersectionObservers: IntersectionObservers = new Map()

  private isExecutionAllowed = false

  private initExecutionAllowed(): void {
    setTimeout(() => {
      this.isExecutionAllowed = true
    })
  }

  private getHeightCoefficient(observer: Observer): number {
    const heightCoefficient =
      document.documentElement.clientHeight / observer?.ref.current.getBoundingClientRect().height
    return heightCoefficient
  }

  private getObserverThreshold(heightCoefficient: number): number {
    const observerThreshold = heightCoefficient > 1 ? 1 : heightCoefficient
    return observerThreshold
  }

  private getIntersectionObserverCallback(): (entries: Array<IntersectionObserverEntry>) => void {
    const intersectionObserverCallback = (entries: Array<IntersectionObserverEntry>): void => {
      if (entries && this.isExecutionAllowed) {
        this.onIntersection((entries[0].target as any).observerId as string)
      }
    }
    return intersectionObserverCallback
  }

  private getIntersectionObserverOptions(observerThreshold: number): { threshold: number } {
    const intersectionObserverOptions = {
      threshold: observerThreshold,
    }
    return intersectionObserverOptions
  }

  private getIntersectionObserver(observerThreshold: number): IntersectionObserver {
    const intersectionObserverCallback = this.getIntersectionObserverCallback()
    const intersectionObserverOptions = this.getIntersectionObserverOptions(observerThreshold)
    return new IntersectionObserver(intersectionObserverCallback, intersectionObserverOptions)
  }

  private getResizeObserver(key: string, observer?: Observer): ResizeObserver {
    return new ResizeObserver(() => {
      if (observer?.ref.current) {
        const heightCoefficient = this.getHeightCoefficient(observer)
        const observerThreshold = this.getObserverThreshold(heightCoefficient)
        if (!this.intersectionObservers.has(observerThreshold)) {
          const intersectionObserver = this.getIntersectionObserver(observerThreshold)
          this.intersectionObservers.set(observerThreshold, intersectionObserver)
          observer.ref.current.observerId = key
          this.intersectionObservers.get(observerThreshold)!.observe(observer?.ref?.current)
        } else {
          observer.ref.current.observerId = key
          this.intersectionObservers.get(observerThreshold)!.observe(observer?.ref?.current)
        }
      }
    })
  }
  constructor(onIntersection: OnIntersection) {
    this.onIntersection = onIntersection
  }

  init(): void {
    this.initExecutionAllowed()

    Array.from(this.observers.keys()).forEach((key) => {
      const observer = this.observers.get(key)
      const resizeObserver = this.getResizeObserver(key, observer)
      resizeObserver.observe(observer?.ref.current)
    })
  }

  getObserverOptions(id: string): { ref: MutableRefObject<null> } {
    const ref = useRef(null)
    this.observers.set(id, { ref })
    return {
      ref,
    }
  }
}
