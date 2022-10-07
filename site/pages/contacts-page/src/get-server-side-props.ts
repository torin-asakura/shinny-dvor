import { runAvailableRadiiQuery } from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runNavigationQuery }     from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [
    runFragmentsQuery(),
    runContactsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
