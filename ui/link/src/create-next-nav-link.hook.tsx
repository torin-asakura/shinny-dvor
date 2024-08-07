import React         from 'react'
import { useRouter } from 'next/navigation'

// TODO interface
export const createNextNavLink = (Link, pathProp = 'path') => {
  const router = useRouter()

  // TODO change active prop on link
  // use app router active properties

  return (props) => (
    <Link
      {...{ [pathProp]: props[pathProp] }}
      active={router && router.asPath === props[pathProp]}
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
