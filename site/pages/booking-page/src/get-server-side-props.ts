import { runAvailableRadiiQuery } from './queries'
import { runBookingQuery }        from './queries'
import { runCarBodiesQuery }      from './queries'
import { runServicesQuery }       from './queries'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [
    runBookingQuery(),
    runAvailableRadiiQuery(),
    runCarBodiesQuery(),
    runServicesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
