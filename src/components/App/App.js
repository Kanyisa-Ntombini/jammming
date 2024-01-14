import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Header</h1>
      </header>

      <main>
        <SearchBar />
      </main>

      <footer className="Footer">
        <div>&copy; 2024 K Ntombini</div>
      </footer>
    </div>
  );
}

export default App;
