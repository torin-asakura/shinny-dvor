import { runContactsQuery } from './queries'
import { runFooterQuery }   from './queries'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [runFooterQuery(), runContactsQuery()]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
