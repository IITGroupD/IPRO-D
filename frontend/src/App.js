import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Display from './Display';
import SearchBar from './SearchBar';
import Filter from './Filter';
function App() {
  return (
    <div className="App">
    <Post />
    <SearchBar />
    <Filter />
    <Display />
    </div>
  );
}

export default App;
