export type GetObserverOptionsGetter = ({
  isLoaded,
  setActive,
}: {
  isLoaded: React.MutableRefObject<boolean>
  setActive: React.Dispatch<React.SetStateAction<number>>
}) => (id: string) => any
