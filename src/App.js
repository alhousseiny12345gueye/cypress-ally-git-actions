import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <a href="https://react.dev/reference/react" data-test="logo"><img src={logo} className="App-logo" alt='logo' /></a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-test="learn-more-link"
        >
          Learn React
        </a>
      </header>

      <main>
      <h1 data-test="h1-tag">localhost</h1>
      <h2>Our h2 header</h2>
      <h3>the price 25.00$</h3>
      </main>
    </div>
  );
}

export default App;
