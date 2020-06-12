import Layout from '../components/Layout';
import { initializeApollo } from '../lib/apolloClient'
import Posts, {
    ALL_POSTS_QUERY,
    blogPostCollectionQueryVars,
} from '../components/Posts'

function Blog() {
    return (
        <Layout title="Blog" authorOnOff={true}>
            <Posts/>
        </Layout>);
}

export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: ALL_POSTS_QUERY,
        variables: blogPostCollectionQueryVars,
    })
    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        unstable_revalidate: 1,
    }
}
export default Blog