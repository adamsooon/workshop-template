import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter => counter + 1);
  }
  useEffect(() => {
    const interval = window.setInterval(handleIncrement, 5000);

    return () => window.clearInterval(interval);
  }, [counter]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <Button
            variant="outlined"
            color="primary"
            onClick={handleIncrement}
        >
          increment
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
