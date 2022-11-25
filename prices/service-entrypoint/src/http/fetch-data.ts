import fetch from 'node-fetch'

const fetchData = async (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-client-key': `Application ${process.env.API_KEY}`,
    },
  })

export { fetchData }
