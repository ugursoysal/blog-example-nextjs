import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apolloClient'

export default function Layout({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}