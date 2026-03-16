import { useState, useEffect } from 'react'  
import './App.css'

const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState("Tutti");  
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    console.log('🔍 useEffect attivo - Genere:', selectedGenre);

    if (selectedGenre === "Tutti") {
      setFilteredMovies(movies);
      console.log('tutti', movies.length);
    } else {
      const filtered = movies.filter(movie => movie.genre === selectedGenre);
      setFilteredMovies(filtered);
      console.log('Filtrati', filtered.length);
    }
  }, [selectedGenre]);  

  return (
    <>
      <div>prova</div>
      <p>Genere: {selectedGenre} | Film: {filteredMovies.length}</p>
    </>
  );
}

export default App;
