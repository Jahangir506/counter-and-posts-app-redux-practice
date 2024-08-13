import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postslice";
import PostCards from "./PostCards";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.postsR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <div className="text-center m-8">
        {isLoading && <h1 className="text-3xl font-bold">Loading...</h1>}
        {error && <h1 className="text-3xl font-bold">{error}</h1>}
        <section className="grid grid-cols-2 gap-4">
          {posts &&
            posts.map((post) => {
              return (
                <PostCards post={post} key={post.id}/>
              );
            })}
        </section>
      </div>
    </>
  );
};
export default PostsView;
