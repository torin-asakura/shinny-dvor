import React                        from 'react'

import { TestPageClient }           from './test-page.client.js'
import { runTestPageServerQueries } from './hooks/index.js'

const TestPage = async () => {
  const { servicesDataToReplace } = await runTestPageServerQueries()
  return <TestPageClient servicesDataToReplace={servicesDataToReplace} />
}

export default TestPage
