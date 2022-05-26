import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/AppLayout/Layout";
import { MovieList } from "./components/movies/MovieList";
import { MovieShow } from "./components/movies/MovieShow";

function App() {
  return (
    <>
      <Router>
        <Routes>
              <Route path="/" element={<Layout><MovieList /></Layout>} />
              <Route path="/movies/:id" element={<Layout><MovieShow /></Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
