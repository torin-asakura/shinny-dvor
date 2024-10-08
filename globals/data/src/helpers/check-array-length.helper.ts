/* eslint-disable */

const checkArrayLength = (objectToCheck: Record<string, Array<any>>) => {
  const checkVariableName = Object.keys(objectToCheck)[0]
  const checkVariableValue = objectToCheck[checkVariableName]

  if (!checkVariableValue.length) {
    throw new Error(`${checkVariableName} is empty`)
  }
}

export { checkArrayLength }
