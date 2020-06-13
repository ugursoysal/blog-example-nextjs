import Styles from "../styles/main.scss"
import getDateString from "../lib/getDateString"

function Comments({ comments }) {
    const commentsElement = comments.map((comment, index) => {
        return (
            <div className={Styles.commentBox} key={index+1}>
                <h6 className={Styles.commentAuthor}>
                    {comment.commentAuthor}
                </h6>
                <div className={Styles.commentText}>
                    {comment.commentText}
                </div>
                <div className={Styles.commentDate}>
                    {getDateString(comment.commentDateTime)}
                </div>
            </div>)
    })
    return <div className={Styles.commentSection}>
        <h5>Comments</h5>
        {commentsElement}
    </div>
}

export default Comments