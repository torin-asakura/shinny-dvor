export const extractFragment = (key: string, id: string, data: any[]) =>
  data?.filter((fragment) => fragment[key].fragmentId === id)[0]?.[key]
