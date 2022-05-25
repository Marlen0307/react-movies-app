import React, { useEffect } from 'react';
import { fetchMovies } from './service';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { MovieList } from './components/movies/MovieList';

function App() {
 
  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
