import type { SubmitFormHookType } from './submit-form.interface.js'

const submitFormHook: SubmitFormHookType = async ({
  name,
  phone,
  selectedCarBody,
  selectedRadius,
  selectedRepairTypes,
  comment,
}) => {
  const jsonData = JSON.stringify({
    telegramFullName: name,
    phone,
    carBody: selectedCarBody,
    radii: selectedRadius,
    service: selectedRepairTypes.join(', '),
    commentary: comment,
  })

  await fetch('/api/booking', {
    method: 'post',
    body: jsonData,
  })
}

export { submitFormHook }
