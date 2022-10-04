import { runAvailableRadiiQuery } from './queries'
import { runServicesQuery }       from './queries'
import { runBlogQuery }           from './queries'
import { runWorkExamplesQuery }   from './queries'
import { runNavigationQuery }     from './queries'
import { runContactsQuery }       from './queries'
import { runPostsQuery }          from './queries'
import { runInfographicsQuery }   from './queries'
import { runFooterQuery }         from './queries'
import { runHeroQuery }           from './queries'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [
    runHeroQuery(),
    runContactsQuery(),
    runFooterQuery(),
    runInfographicsQuery(),
    runPostsQuery(),
    runBlogQuery(),
    runNavigationQuery(),
    runWorkExamplesQuery(),
    runAvailableRadiiQuery(),
    runServicesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
