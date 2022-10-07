import { runAvailableRadiiQuery } from '@globals/data'
import { runNavigationQuery }     from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'

import { runServicesQuery }       from './queries'
import { runPostsQuery }          from './queries'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runServicesQuery(),
    runFragmentsQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
