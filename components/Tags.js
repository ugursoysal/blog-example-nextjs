import Link from 'next/link'

function Tags({ tagArray }) {
  return (
    <ul>
      {
        tagArray.map(function (tag) {
          return (
            <li key={tag}>
              <Link key={tag} href='/blog/tag/[id]' as={'/blog/tag/' + tag}>
                <a>
                  {tag}
                </a>
              </Link>
            </li>);
        })
      }
    </ul>
  )
}
export default Tags