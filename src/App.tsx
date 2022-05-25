import React, { useEffect } from 'react';
import { fetchMovies } from './service';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { MovieList } from './components/movies/MovieList';
import { MovieShow } from './components/movies/MovieShow';

function App() {
 
  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieShow />} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
