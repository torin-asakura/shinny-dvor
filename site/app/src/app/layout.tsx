import { ApolloWrapper } from './apollo-wrapper.js'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  )
}
