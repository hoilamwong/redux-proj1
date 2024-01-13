import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
