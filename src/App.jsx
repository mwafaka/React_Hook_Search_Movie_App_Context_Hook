import { useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./components/Search";
import demoContext from "./demoContext";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const [state, setState] = useState();

  const fetchData = async (input) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${input}&apikey=4a3b711b`
    );
    const data = await response.json();
    setState(data);
  };

  return (
    <div className="App">
      <demoContext.Provider value={{ fetchData, setState }}>
        <Header />
        <Search />
        <div className="movies">
          {state &&
            state.Search.map((item) => {
              return <MovieDisplay key={item.imdbID} id={item.imdbID} />;
            })}
        </div>
      </demoContext.Provider>
    </div>
  );
}

export default App;
