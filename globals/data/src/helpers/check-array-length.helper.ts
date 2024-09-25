const checkArrayLength = (objectToCheck: { [key: string]: Array<any> }) => {
  const checkVariableName = Object.keys(objectToCheck)[0]
  const checkVariableValue = objectToCheck[checkVariableName]

  if (!checkVariableValue.length) {
    throw new Error(`${checkVariableName} is empty`)
  }
}

export { checkArrayLength }
