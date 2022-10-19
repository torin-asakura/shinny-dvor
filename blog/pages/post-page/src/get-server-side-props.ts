import { runAvailableRadiiQuery } from '@globals/data'
import { setCacheHeader }         from '@globals/data'
import { runCarBodiesQuery }      from '@globals/data'
import { runServicesQuery }       from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runNavigationQuery }     from '@globals/data'

import { runPostQuery }           from './queries'

export const getServerSideProps = async ({ params, res }) => {
  const { id } = params

  setCacheHeader(res, 3600, 300)

  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runFragmentsQuery(),
    runPostQuery(id),
    runCarBodiesQuery(),
    runServicesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
