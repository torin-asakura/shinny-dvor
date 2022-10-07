import { runAvailableRadiiQuery } from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runNavigationQuery }     from '@globals/data'

import { runPostsQuery }          from './queries'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runFragmentsQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
