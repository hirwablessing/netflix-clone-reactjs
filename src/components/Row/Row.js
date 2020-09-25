import React, { useState, useEffect } from "react";
import { fetchData } from "../../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

// This is reusable component
function Row(props) {
  const { title, fetchUrl, isLargeRow } = props;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    fetchData(fetchUrl)
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const handleClick = (movie) =>{
    if(trailerUrl) {
      setTrailerUrl("");
    }
    else{
      movieTrailer(movie?.name || "").then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
        console.log(trailerUrl)
      }).catch((error) => alert("The requested resource could not be found"))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie, i) => {
          return (
            <img
              key={i}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${process.env.REACT_APP_BASE_API_IMAGE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
