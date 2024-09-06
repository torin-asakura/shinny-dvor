const incrementPostViewConuterFetchHook = (postId: number) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  fetch('https://wp.shdvor.pro/graphql', {
    headers: myHeaders,
    method: 'POST',
    body: `{ "query": "mutation { incrementCounter(input: {post_id: ${postId}}) { viewCount __typename }}" }`,
  })
}

export { incrementPostViewConuterFetchHook }
