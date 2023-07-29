import React from "react";
import "./data.css"
// import "./index.css"
import Hedersection from "./headerpage";
const MovieList = () => {
    const movieData = [
        {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 1",
            category: "Action",
            language: "English",
            sort: "Popular",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBdI1SKQCTHrH1aJmi6AQi3ciT36Rt6tkFwf0a5Nvhw&s",
          },
          {
            title: "Movie 2",
            category: "Comedy",
            language: "Spanish",
            sort: "Newest",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvyfXY9al8NWCtljkBV_Gh16ql1FLjo8_2aTXGnyt&s",
          },
          {
            title: "Movie 3",
            category: "Drama",
            language: "French",
            sort: "Voting",
            posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFzxaQJWCiAsMY0efk5awmGShJ9QK6DPZg7t1mK11&s",
          },
         
          
         
    ]
    return (
        <div className="movie-list-container">
          <Hedersection/>
          <h2>Movie List</h2>
          <div className="movie-list">
            {movieData.map((movie, index) => (
              <div key={index} className="movie-card">
                <img src={movie.posterUrl} alt={movie.title} />
                <div className="movie-info">
                  <p className="movie-title">{movie.title}</p>
                  <p className="movie-category">Category: {movie.category}</p>
                  <p className="movie-language">Language: {movie.language}</p>
                  <p className="movie-sort">Sort: {movie.sort}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
 


export default MovieList;
