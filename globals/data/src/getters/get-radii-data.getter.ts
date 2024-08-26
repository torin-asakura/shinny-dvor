import type { SchemaQueryDataType } from '@globals/data/interfaces'

const getRadiiData = async (schema: SchemaQueryDataType['__schema']['types']) => {
  const filteredService = schema.fields
    .filter((radius) => radius.name.length <= 3)
    .map((radius) => ({
      radius: radius.name,
      body: radius.type.fields
        .map((field) => field.name)
        .filter((name) => name !== 'fieldGroupName'),
    }))

  const services = filteredService.reduce(
    (result, { radius, body }) => ({
      ...result,
      [radius]: `${radius} { ${body} }`,
    }),
    {}
  )

  return Object.values(services)
}

export { getRadiiData }
