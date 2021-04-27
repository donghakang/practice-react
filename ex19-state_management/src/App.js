import "./App.css";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import {Footer} from './Footer';
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie/>
        <Footer/>
      </div>
    </MovieProvider>
  );
}

export default App;
