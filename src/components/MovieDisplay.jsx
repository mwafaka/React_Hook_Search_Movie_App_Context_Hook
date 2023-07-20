import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const MovieDisplay = ({ id }) => {
  const [state, setSate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let reaponse = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=4a3b711b`
      );
      let data = await reaponse.json();
      setSate(data);
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <div className="movie">
        <div className="card" style={{ width: "18rem", marginLeft: "13rem" }}>
          <img src={state.Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{state.Title}</h5>
            <p className="card-text">BoxOffice: {state.BoxOffice}</p>
            <p className="card-text">Country: {state.Country}</p>
            <a href={state.Poster} className="btn btn-danger">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
