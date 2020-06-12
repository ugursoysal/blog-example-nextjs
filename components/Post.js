import Styles from "../styles/main.scss"
import Content from "../components/Content"

function Post({ post, index }) {
    if (!post || !post.published)
        return <div></div>
    if (!index)
        index = 1;
    return (
        <article key={index + 1}>
            <div key={index + 1}>
                {(post.image != null) ? (<img className={Styles.postImage} src={post.image.url} />) : null}
                <h2>{post.title}</h2>
                {(post.content) ? <Content json={post.content.json} /> : null}
            </div>
        </article>
    );
}
export default Post;