import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";
import Home from "./page/Home";

function App() {
  return (
    <>
      <div>
        <Home />
        <div className=" pt-12">
          <CounterView />
          <div className="mt-12">
            <PostsView />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
