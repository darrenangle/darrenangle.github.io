import { useState } from "react";
import { ImageBackground } from "./global/ImageBackground";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ImageBackground url="" />
    </div>
  );
}

export default App;
