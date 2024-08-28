// @ts-expect-error any type
export const extractFragment = (key: string, id: string, data) =>
  // @ts-expect-error any type
  data?.filter((fragment) => fragment[key].fragmentId === id)[0]?.[key]
