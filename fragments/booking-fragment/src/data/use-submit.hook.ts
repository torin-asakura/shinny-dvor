import { useMutation } from '@apollo/client'

import { SUBMIT_FORM } from './submit.mutation.js'

const useSubmit = () => {
  const [submit, { data }] = useMutation(SUBMIT_FORM)

  return [submit, data]
}

export { useSubmit }
