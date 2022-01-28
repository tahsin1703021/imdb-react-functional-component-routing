import React, { useEffect, useState } from "react";
import Table from "../common/table.component";
import Rating from "../common/rating.component";
import getMovies from "../service/get-movies.service";
import _ from "lodash";
import Pagination from "../common/pagination.component";
import getGenres from "../service/get-genres.service";
import Filter from "../common/filtering.component";

const Movies = (props) => {
  const [state, setState] = useState(
    {
      movies: [],
      sortColumns: {
        path: "id",
        order: "asc",
      },
      activePage: 1,
      pageCount: 5,
      genres: [],
      selectedGenre: "All Genres"
    }
  )
  useEffect(() => {
      const movies = getMovies();
      const genres =["All Genres", ...getGenres()];
      setState((prevState) => (
            { ...prevState,
              movies: movies,
              genres: genres,
              selectedGenre: "All Genres"
            }
          )
      );
    },[]);
  
  const paginatedMovies = (movies) => {
     const { activePage, pageCount } = state;
    const start = (activePage - 1) * pageCount;
    const paginatedMovies = movies.slice(start, start + pageCount);
    return paginatedMovies;
  };
  const handleToggleRating = (movieRank) => {
    const movies = [...state.movies];
    const movie = movies.find((movie) => movie.id === movieRank);
    movie.isRated = !movie.isRated;
    setState((prevState) => ({
      ...prevState,
      movies: movies
    }))
  };

  const handleSort = (sortColumns) => {
    setState((prevState) => ({
      ...prevState,
      sortColumns: sortColumns
    }))
  };
  const  sortMovies = (movies) => {
    const sortColumn = state.sortColumns;
    const sortedMovies = _.orderBy(
      movies,
      [sortColumn.path],
      [sortColumn.order]
    );
    return sortedMovies;
  };

  const handleClickPage = (activePage) => {
    console.log("HI");
    setState((prevState) => ({
      ...prevState,
      activePage: activePage
    }))
  };

  const handleClickFilter = (selectedGenre) => {
    setState((prevState) => ({
      ...prevState,
      selectedGenre: selectedGenre
    }))
  }
  const filterMovies = () => {
    const { movies, selectedGenre } = state;
    const filteredMovies = movies.filter (movie => {
        if(selectedGenre === "All Genres") return true;

        if(movie.genres.includes(selectedGenre)) return true;
        return false;
    });

    return filteredMovies;
  }
  
    const filteredMovies = filterMovies();
    const paginatedMovie = paginatedMovies(filteredMovies);
    const movies = sortMovies(paginatedMovie);
    const columns = [
      {
        label: "Rank",
        path: "id",
        sorting: true,
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Title",
        path: "title",
        sorting: true,
        content: (movie, key) => <td>{movie[key]}</td>,
      },
      {
        label: "Poster",
        path: "posterUrl",
        content: (movie, key) => (
          <td>
            <img src={movie[key]} style={{ height: "100px", width: "auto" }} />
          </td>
        ),
      },
      {
        label: "Your Rating",
        path: "isRated",
        content: (movie, key) => (
          <td>
            <Rating
              isRated={movie[key]}
              rank={movie.rank}
              handleToggleRating={handleToggleRating}
            />
          </td>
        ),
      },
      {
        label: "Action",
        path: "action",
        content: (movie, key) => <td>{movie[key]}</td>,
      },
    ];

    return (
      <>
        <div className="container" style={{marginTop:'50px'}}>
            <div className="row">
                <Filter 
                    items={state.genres}
                    selectedGenre={state.selectedGenre} 
                    onClickFilter={handleClickFilter}   
                />
                <div className="col-lg-8">
                    <Table
                        items={movies}
                        columns={columns}
                        sortColumns={state.sortColumns}
                        onSort={handleSort}
                    />
                    <Pagination
                        totalItems={filteredMovies.length}
                        pageCount={state.pageCount}
                        activePage={state.activePage}
                        onClickPage={handleClickPage}
                    />
                </div>
            </div>
        </div>
      </>
    );
  
}

export default Movies;
