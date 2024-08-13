const PostCards = ({post}) => {
    return(
        <>
             <article className="bg-gray-200 p-4">
                  <h4 className="text-3xl"><span className="text-4xl">Title:</span> {post.title}</h4>
                  <p>{post.body}</p>
                </article>
        </>
    )}
export default PostCards;