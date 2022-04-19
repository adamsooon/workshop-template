import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Fab, Paper, Typography } from "@material-ui/core";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    const interval = window.setInterval(handleIncrement, 5000);
    // onMount
    return () => window.clearInterval(interval);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Box my={10}>
          <Typography variant="h5">{counter}</Typography>
          <Button variant="outlined" color="primary" onClick={handleIncrement}>
            increment
          </Button>
        </Box>

        <Box>
          <Link to="/demo">
            <Button variant="outlined" color="secondary">
              Redux Saga DEMO
            </Button>
          </Link>
        </Box>
      </header>
    </div>
  );
}

export default App;
