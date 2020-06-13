import Styles from '../styles/main.scss'

function LoadMoreButton({ areMorePosts, loadingMorePosts, loadMorePosts }) {
    return (
        <div>
            {areMorePosts && (
                <a className={Styles.loadMoreButton} onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
                    {loadingMorePosts ? 'Loading...' : 'Show More'}
                </a>
            )}
        </div>)
}

export default LoadMoreButton