export type UseIndexPageClientType = ({
  isLoaded,
  setActive,
  headerRef,
  setScrollY,
}: {
  headerRef: React.MutableRefObject<HTMLDivElement | null>
  isLoaded: React.MutableRefObject<boolean>
  setActive: React.Dispatch<React.SetStateAction<number>>
  setScrollY: React.Dispatch<React.SetStateAction<number>>
}) => { getObserverOptions: (id: string) => { ref: any } }
