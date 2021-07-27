import './App.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Mood from './components/Mood';
import Exercises from './components/Exercises';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />

        <SearchBar />

        <Mood />
      </div>

      <div className="app__popup-container">
        <Exercises />
      </div>

      <div className="nav-section">
        <div className="nav-container">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
