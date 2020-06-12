import Layout from "./Layout";
import ErrorPage from 'next/error'
export default function ErrorMessage({ statusCode, message }) {
  if (statusCode == '404')
    return <ErrorPage statusCode={statusCode} />
  return (
    <Layout title="Error">
      <aside>
        {message}
      </aside>
    </Layout>
  )
}
