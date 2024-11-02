const fetchAqsiDataHelper = async (url: string): Promise<Record<string, any>> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-client-key': `Application ${process.env.AQSI_API_KEY!}`,
    },
  })

  return (await response.json()) as Record<string, any>
}

export { fetchAqsiDataHelper }
