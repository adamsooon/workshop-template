import './App.css';
import { useEffect, useState } from "react";
import Users from "./components/users";

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
      <Users/>
    </div>
  );
}

export default App;
