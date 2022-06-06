import React from "react";
import Image from "next/image";
import Link from "next/link";

const MoviesData = ({ movieslist }) => {
  // console.log(movieslist)
  return (
    <>
      {movieslist.map((movie) => {
        return (
          <div key={movie}>
            <Link href={`/${movie.imdbID}`}>
              <div>
                <Image
                  src={movie.Poster}
                  alt={movie.Poster + "Poster"}
                  width={220}
                  height={350}
                />

                <div>
                  <h2 className="card--title">Ttile: {movie.Title}</h2>
                  {/* <p>id: {movie.imdbID}</p> */}

                  <p>Year: {movie.Year}</p>

                  {/* <p>Rating: {movie.vote_average}</p> */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default MoviesData;
// onClick={(e) => openInfo(movie.imdbID)}
