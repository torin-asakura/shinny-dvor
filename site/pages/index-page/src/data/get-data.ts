import { runAvailableRadiiQuery } from '@globals/data'
import { runCarBodiesQuery }      from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'
import { runNavigationQuery }     from '@globals/data'
import { runPostsQuery }          from '@globals/data'
import { runServicesQuery }       from '@globals/data'
import { runUiQuery }             from '@globals/data'

import { runWorkResultsQuery }    from '../queries'

export const getData = async () => {
  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runServicesQuery(),
    runFragmentsQuery(),
    runUiQuery(),
    runWorkResultsQuery(),
    runCarBodiesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { data }
}
