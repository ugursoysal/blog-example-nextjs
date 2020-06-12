import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const UPDATE_POST_MUTATION = gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      __typename
      id
      votes
    }
  }
`

export default function PostUpvoter({ votes, id }) {
  const [updatePost] = useMutation(UPDATE_POST_MUTATION)

  const upvotePost = () => {
    updatePost({
      variables: {
        id,
        votes: votes + 1,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updatePost: {
          __typename: 'Post',
          id,
          votes: votes + 1,
        },
      },
    })
  }

  return (
    <button onClick={() => upvotePost()}>
      {votes}
    </button>
  )
}
