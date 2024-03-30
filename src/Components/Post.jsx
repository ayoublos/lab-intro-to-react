function Post(props){
    const {post}=props
    return(
        <div className="post-container">
            <h3 className="post-container__title">
                {post.title}
            </h3>
            <p> {post.content}</p>

        </div>
    )
}
export default Post