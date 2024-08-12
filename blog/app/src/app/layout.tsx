import React                            from 'react'

import { RootLayout as BaseRootLayout } from '@blog/root-layout-fragment'

import messages                         from '../../locales/ru.json'

const RootLayout = ({ children }) => <BaseRootLayout messages={messages}>{children}</BaseRootLayout>

export { generateMetadata } from '@blog/root-layout-fragment'

export default RootLayout
