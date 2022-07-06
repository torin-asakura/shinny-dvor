import { useRef }    from 'react'
import { useEffect } from 'react'

const doNothing = () => {
  // do nothing
}

const useIntersectionObserver = (onIntersection: (id: string) => void = doNothing) => {
  const observers: Map<string, { ref: any; threshold: number }> = new Map()

  const getObserverOptions = (id: string, hold): { ref: any } => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null)

    observers.set(id, { ref, threshold: hold })
    return {
      ref,
    }
  }

  useEffect(() => {
    const intersectionObservers: Map<number, IntersectionObserver> = new Map()

    let isExecutionAllowed = false

    setTimeout(() => {
      isExecutionAllowed = true
    }, 100)
    /* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
    for (const key of observers.keys() as any) {
      const observerThreshold = observers.get(key)!.threshold

      if (!intersectionObservers.has(observerThreshold)) {
        intersectionObservers.set(
          observerThreshold,
          new IntersectionObserver(
            // eslint-disable-next-line
            (entries) => {
              if (entries && isExecutionAllowed) {
                onIntersection((entries[0].target as any).observerId)
              }
            },
            { threshold: observerThreshold }
          )
        )

        const observer = observers.get(key)

        observer!.ref.current.observerId = key

        intersectionObservers.get(observerThreshold)!.observe(observer?.ref?.current)
      } else {
        const observer = observers.get(key)

        observer!.ref.current.observerId = key

        intersectionObservers.get(observerThreshold)!.observe(observer?.ref?.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    getObserverOptions,
  }
}

export { useIntersectionObserver }
