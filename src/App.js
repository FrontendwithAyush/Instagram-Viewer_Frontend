import "./App.css";
import Landing from "./components/Landing";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <LoadingBar color="#f11946" progress={progress} />
      <Landing setProgress={setProgress} />
    </div>
  );
}

export default App;
