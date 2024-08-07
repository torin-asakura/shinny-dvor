import React         from 'react'
import { useRouter } from 'next/navigation'

// TODO interface
export const createNextLink = (Link, pathProp = 'path') => {
  const router = useRouter()

  return (props) => (
    <Link
      {...{ [pathProp]: props[pathProp] }}
      onClick={(event) => {
        event.preventDefault()

        if (router) {
          router.push(props[pathProp])
        }
      }}
      {...props}
    />
  )
}
