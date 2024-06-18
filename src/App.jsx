import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Latest from "./components/Latest";
import Popular from "./components/Popular";
import FeedMenu from "./components/FeedMenu";

function App() {
  return (
    <>
      <Navigation />
      <div className="feed-box">
        <FeedMenu />
        <Routes>
          <Route path="/latest" element={<Latest />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
