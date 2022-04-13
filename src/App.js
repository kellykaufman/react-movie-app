import logo from "./logo.svg";
import "./App.css";
import GetMovieId from "./components/GetMoviesById";
import { GetMoviesByName } from "./components/GetMoviesByName";

function App() {
  return (
    <div>
      <GetMovieId />
      <GetMoviesByName />
    </div>
  );
}

export default App;
