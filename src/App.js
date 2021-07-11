import "./App.css";
import MoviesList from "./MoviesContextExample/MoviesList";
import Nav from "./MoviesContextExample/Nav";
import { MovieProvider } from "./MoviesContextExample/MovieContext";
import AddMovie from "./MoviesContextExample/AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MoviesList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
