import style from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className={style.App}>
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
