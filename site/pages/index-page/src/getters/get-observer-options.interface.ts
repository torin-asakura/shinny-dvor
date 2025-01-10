import type { PageIntersectionObserver } from '@ui/intersection-observer'
export type Return = ReturnType<PageIntersectionObserver['getObserverOptions']>

export type GetObserverOptionsGetter = ({
  isLoaded,
  setActive,
}: {
  isLoaded: React.MutableRefObject<boolean>
  setActive: React.Dispatch<React.SetStateAction<number>>
}) => (id: string) => Return
