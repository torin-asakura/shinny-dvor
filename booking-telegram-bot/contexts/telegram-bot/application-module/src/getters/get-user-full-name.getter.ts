import type { GetUserFullNameType } from './get-user-full-name.interface.js'

const getUserFullName: GetUserFullNameType = (firstName, lastname) => {
  let output = ''
  output += firstName
  if (lastname) output += ` ${lastname}`
  return output
}

export { getUserFullName }
