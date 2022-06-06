import { useRouter } from "next/router";
import React from "react";

const MovieInfo = ({ movie.imdbID }) => {
  // console.log(movieslist)

//   e.preventDefault();
  const router = useRouter();
  const id = router.query.MovieInfo;
  console.log(id);
  return (
    <>
      {movieslist.map((movie) => {
        return (
          <div key={movie}>
            
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
            
          </div>
        );
      })}
    </>
  );
};

// const MovieInfo =  (e) => {
//   // e.preventDefault();
//   const router = useRouter()
//   const id = router.query.MovieInfo
//   // console.log(id);

//   return (
//     <div>
//       <div>ID</div>

//     </div>
//   )
// }

export default MovieInfo;
