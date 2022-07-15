const extractFragments = (fragments) =>
  fragments.reduce((result, fragment) => {
    const key = fragment.fragmentParams.scope[0].toLowerCase()

    const extractScope = () => ({
      [fragment.fragmentParams.scope[0]]:
        result[key] && result[key][fragment.fragmentParams.scope[0]]
          ? [...result[key][fragment.fragmentParams.scope[0]], fragment]
          : [fragment],
    })

    return {
      ...result,
      [key]: {
        ...result[key],
        ...extractScope(),
      },
    }
  }, {})

export { extractFragments }
