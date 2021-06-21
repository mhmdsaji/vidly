import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import { getGenreName } from "../services/genreService";
import Like from "./common/Like";
import Table from "./common/Table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => <Link to={`/movies/${movie.id}`}>{movie.title}</Link>,
    },
    {
      key: "Genre",
      content: (movie) => {
        return (
          <ul>
            {movie.genre_ids.map((genre) => (
              <li key={genre}>{getGenreName(this.props.genres, genre)}</li>
            ))}
          </ul>
        );
      },
    },
    { path: "release_date", label: "Release Date" },
    { path: "vote_average", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className='btn btn-danger btn-sm'>
        Delete
      </button>
    ),
  };

  getMovieGenresNames = (movie) => {};

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
