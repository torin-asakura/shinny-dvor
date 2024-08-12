import React                            from 'react'

import { RootLayout as BaseRootLayout } from '@site/root-layout-fragment'

import messages                         from '../../locales/ru.json'

export { generateMetadata } from '@site/root-layout-fragment'

const RootLayout = ({ children }) => <BaseRootLayout messages={messages}>{children}</BaseRootLayout>

export default RootLayout
