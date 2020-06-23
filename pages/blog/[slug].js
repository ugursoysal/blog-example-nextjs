import Post from '../../components/Post';
import Layout from '../../components/Layout';
import ErrorMessage from '../../components/ErrorMessage';
import { initializeApollo } from '../../lib/apolloClient'
import { ALL_PATHS_QUERY, ONE_POST_QUERY } from '../../lib/gqlQueries'
import Comments from "../../components/Comments"


function Slug({ post }) {
    if (!post)
        return <ErrorMessage statusCode='404' message="Page not found." />
        
    var comments = (post.linkedFrom != null) ? 
    (post.linkedFrom.commentCollection.items) : { length : 0 };
    return (
        <Layout title="Blog" tagArray={post.tags} authorOnOff={true}>
            <Post post={post} />
            <br />
            {comments.length != 0 ?
                <Comments comments={comments} /> : null}
        </Layout>);
}
export async function getStaticPaths() {
    const apolloClient = initializeApollo()

    var path_query = await apolloClient.query({
        query: ALL_PATHS_QUERY
    })
    var paths = path_query.data.blogPostCollection.items.map(post => {
        return { params: { slug: `${post.slug}` } }
    })
    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps({ params }) {
    const apolloClient = initializeApollo()

    var one_post_query = await apolloClient.query({
        query: ONE_POST_QUERY,
        variables: { slug: params.slug },
    })

    var post = (one_post_query.data.blogPostCollection.total != 0) ?
        one_post_query.data.blogPostCollection.items[0] : null;
    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
            post
        },
        unstable_revalidate: 1,
    }
}
export default Slug