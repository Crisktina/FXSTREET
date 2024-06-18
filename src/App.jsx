import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Latest from "./components/Latest";
import Popular from "./components/Popular";
import FeedMenu from "./components/FeedMenu";
import { useEffect, useState } from "react";
import FetchData from "./services/functions";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    FetchData(setData, setError, setLoading);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navigation />
      <div className="feed-box">
        <FeedMenu />
        <Routes>
          <Route path="/latest" element={<Latest data={data} />} />
          <Route path="/popular" element={<Popular data={data} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
