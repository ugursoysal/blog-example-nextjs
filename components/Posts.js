import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import ErrorMessage from './ErrorMessage'
import Post from '../components/Post'
import LoadMoreButton from '../components/LoadMoreButton'
import { ALL_POSTS_QUERY, blogPostCollectionQueryVars } from '../lib/gqlQueries'

function Posts() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: blogPostCollectionQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: blogPostCollection.items.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult
        }
        return {
          blogPostCollection: Object.assign({}, blogPostCollection,
            {
              items:
                [...previousResult.blogPostCollection.items,
                ...fetchMoreResult.blogPostCollection.items]
            }
          )
        }
      },
    })
  }

  if (error) return <ErrorMessage err="404" />
  if (loading && !loadingMorePosts) return <div>Loading</div>
  const { blogPostCollection } = data
  const areMorePosts = blogPostCollection.items.length < blogPostCollection.total
  return (
    <div>
      {blogPostCollection.items.map((post, index) => (
        <Post post={post} index={index} key={index+1} />
      ))}
    <LoadMoreButton areMorePosts={areMorePosts} loadingMorePosts={loadingMorePosts} loadMorePosts={loadMorePosts}/>
    </div>
  )
}

export default Posts;