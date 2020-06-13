import Link from 'next/link'

function Tags({ styles, tagArray }) {
  return (
    <ul>
      {
        tagArray.map(function (tag) {
          return (
            <li key={tag}>
              <Link key={tag} href='/blog/tag/[tag]' as={'/blog/tag/' + tag}>
                <a className={styles}>
                  #{tag}
                </a>
              </Link>
            </li>);
        })
      }
    </ul>
  )
}
export default Tags