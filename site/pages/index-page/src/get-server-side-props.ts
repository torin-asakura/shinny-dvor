import { runBlogQuery }         from './queries'
import { runContactsQuery }     from './queries'
import { runPostsQuery }        from './queries'
import { runInfographicsQuery } from './queries'
import { runFooterQuery }       from './queries'
import { runHeroQuery }         from './queries'

export const getServerSideProps = async () => {
  const queryPromises: Array<Promise<any>> = [
    runHeroQuery(),
    runContactsQuery(),
    runFooterQuery(),
    runInfographicsQuery(),
    runPostsQuery(),
    runBlogQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { data } }
}
