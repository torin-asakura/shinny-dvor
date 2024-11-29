export const validateResponseHelper = <ValidType>(
  responseText: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validator: (jsonData: any) => ValidType
): ValidType => {
  const jsonData = JSON.parse(responseText)
  return validator(jsonData)
}
