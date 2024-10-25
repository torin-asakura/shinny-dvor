export const bookingApiHandle = async (request: Request): Promise<Response> => {
  const jsonData = await request.json()

  // TODO port to envs
  return fetch('http://localhost:3000/booking', {
    method: 'post',
    body: JSON.stringify(jsonData),
  })
}
