import Styles from "../styles/main.scss"
import Content from "../components/Content"
import getDateString from "../lib/getDateString"
import Link from 'next/link'

function Post({ post, index }) {

    if (post == null || !post.published)
        return <div></div>

    var postDate = (post.dateTime != null) ?
        (getDateString(post.dateTime))
        : null

    var image = (post.image != null) ?
        (<img className={Styles.postImage} src={post.image.url} />)
        : null

    const postContent = (
        <article key={index}>
            <div key={index}>
                {image}
                <h2>{post.title}</h2>
                {(post.content) ?
                    <Content style={Styles.postContentStyle} json={post.content.json} /> : null}
                <br />
                <div className={Styles.postDate}>{postDate}</div>
            </div>
        </article>)
    if (index == null) // don't link post content if there's no list
        return postContent

    return (
        <Link key={index} href='/blog/[slug]' as={'/blog/' + post.slug}>
            <div className={Styles.articleLink}>{postContent}</div>
        </Link>
    );
}
export default Post