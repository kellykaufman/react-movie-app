// import logo from "./logo.svg";
// import "./App.css";
// import GetMovieId from "./components/GetMoviesById";
// import { GetMoviesByName } from "./components/GetMoviesByName";
import { MovieDetails } from "./components/MovieDetails";
import { movieData } from "./components/movieData";

function App() {
  console.log(movieData);
  return (
    <div>
      {/* <GetMovieId /> */}
      {/* <GetMoviesByName /> */}
      <MovieDetails movieData={movieData} />
    </div>
  );
}

export default App;
