// import { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Latest from "./components/Latest";
import Popular from "./components/Popular";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/latest" element={<Latest />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </>
  );
}

export default App;
