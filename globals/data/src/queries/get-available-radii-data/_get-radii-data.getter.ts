// import type { SchemaQueryDataType } from '@globals/data'
// import type { ArrayElement }        from '@globals/data'
//
// type SchemaItemType = ArrayElement<SchemaQueryDataType['__schema']['types']>
//
// const getRadiiData = async (schema: SchemaItemType) => {
//   if (schema.fields) {
//     const filteredService = schema.fields
//       .filter((radius) => radius.name.length <= 3)
//       .map((radius) => {
//         const { name: radiusName } = radius
//         let radiusBody = ['radiusBody']
//
//         if (radius.type.fields) {
//           radiusBody = radius.type.fields
//             .map((field) => field.name)
//             .filter((name) => name !== 'fieldGroupName')
//         }
//
//         return {
//           radius: radiusName,
//           body: radiusBody,
//         }
//       })
//
//     const services = filteredService.reduce(
//       (result, { radius, body }) => ({
//         ...result,
//         [radius]: `${radius} { ${body} }`,
//       }),
//       {}
//     )
//
//     return Object.values(services)
//   }
//
//   return 'emptyRadiiData'
// }
//
// export { getRadiiData }
