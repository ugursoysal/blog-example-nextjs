import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Post from '../components/Post'
import Link from 'next/link'

export const ALL_POSTS_QUERY = gql`
query blogPostCollection($first: Int!, $skip: Int!) {
  blogPostCollection(order: dateTime_DESC, limit: $first, skip: $skip, where: {published:true}) {
    total
    items{
     title
     slug
      published
      image{
        url
      }
    }
  }
}
`
export const blogPostCollectionQueryVars = {
  skip: 0,
  first: 2,
}

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
        <Link key={index} href='/blog/[id]' as={'/blog/' + post.slug}><a><Post post={post} index={index} key={index} /></a></Link>
      ))}
      {areMorePosts && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default Posts;

/*
{
  blogPostCollection(where: {slug: "raja ram"}) {
    items {
      title
      image {
        url
        title
      }
      dateTime
      location {
        lat
        lon
      }
      content {
        json
      }
      published
      tags
    }
  }
}
*/