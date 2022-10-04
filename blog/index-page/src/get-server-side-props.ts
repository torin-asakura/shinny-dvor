import { runAvailableRadiiQuery } from './queries'
import { runBlogQuery }           from './queries'
import { runNavigationQuery }     from './queries'
import { runContactsQuery }       from './queries'
import { runPostsQuery }          from './queries'
import { runFooterQuery }         from './queries'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [
    runFooterQuery(),
    runContactsQuery(),
    runBlogQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
