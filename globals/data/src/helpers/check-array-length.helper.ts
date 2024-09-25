const checkArrayLength = (objectToCheck: { [key: string]: Array<any> }) => {
  console.log(objectToCheck)

  const checkVariableName = Object.keys(objectToCheck)[0]
  const checkVariableValue = objectToCheck[checkVariableName]

  if (!checkVariableValue.length) {
    throw new Error(`${checkVariableName} is empty`)
  }
}

export { checkArrayLength }
