import Post from '../../components/Post';
import Layout from '../../components/Layout';
import ErrorMessage from '../../components/ErrorMessage';
import { initializeApollo } from '../../lib/apolloClient'
import gql from 'graphql-tag'

export const ONE_POST_QUERY = gql`
query blogPostCollection($slug: String!) {
  blogPostCollection(where:{slug: $slug}) {
    items {
      title
      slug
      published
      image {
        url
      }
      tags
      content{
        json
      }
      dateTime
      location {
        lat
        lon
      }
    }
  }
}
`

export const ALL_PATHS_QUERY = gql`
{
    blogPostCollection {
       items {
         slug
       }
     }
   }
`

function Slug({ post }) {
    if (!post)
        return <ErrorMessage statusCode='404' message="Page not found." />
    return (
        <Layout title="Blog" tagArray={post.tags} authorOnOff={true}>
            <Post post={post} />
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