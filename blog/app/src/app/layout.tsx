import { RootLayout as BaseRootLayout } from '@blog/root-layout-fragment'

import React                            from 'react'

import messages                         from '../../locales/ru.json'

const RootLayout = ({ children }) => <BaseRootLayout messages={messages}>{children}</BaseRootLayout>

export default RootLayout
