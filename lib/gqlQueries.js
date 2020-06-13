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
      linkedFrom {
        entryCollection {
          items {
            ... on Comment {
              commentDateTime
              commentText
              commentAuthor
            }
          }
        }
      }
    }
  }
}
`
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

export const ALL_PATHS_QUERY = gql`
{
    blogPostCollection {
       items {
         slug
       }
     }
   }
`

export const POSTS_BY_TAG_QUERY = gql`
query blogPostCollection($first: Int!, $skip: Int!, $tag: [String]!) {
  blogPostCollection(order: dateTime_DESC, limit: $first, skip: $skip, where: {tags_contains_some: $tag, published: true}) {
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
export const ALL_TAGS_QUERY = gql`
{
  blogPostCollection {
     items {
       tags
     }
   }
 }
`
export const tagsQueryVars = {
  skip: 0,
  first: 2,
  tag: "shpongle",
}

export const blogPostCollectionQueryVars = {
    skip: 0,
    first: 2,
  }
  