import Layout from '../../../components/Layout';
import { initializeApollo } from '../../../lib/apolloClient'
import PostsByTag, {
  POSTS_BY_TAG_QUERY,
  ALL_TAGS_QUERY,
  tagsQueryVars
} from '../../../components/PostsByTag'


function Tag({ tag }) {
  if (tag)
    return (
      <Layout title="Blog" authorOnOff={true}>
        <PostsByTag tag={tag} />
      </Layout>)
  return <div></div>
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const path_query = await apolloClient.query({
    query: ALL_TAGS_QUERY
  })
  var tagsArray = []
  path_query.data.blogPostCollection.items.map(post => {
    post.tags.map(tag => {
      tagsArray.push(tag)
    })
  })
  var paths = tagsArray.map(tag => {
    return { params: { tag: `${tag}` } }
  })
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo()

  var { tag } = params
  const vars = Object.assign({}, tagsQueryVars, { tag });

  await apolloClient.query({
    query: POSTS_BY_TAG_QUERY,
    variables: vars,
  })
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      tag
    },
    unstable_revalidate: 1,
  }
}
export default Tag