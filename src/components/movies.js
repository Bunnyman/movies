import React from "react";
import PropTypes from "prop-types";
import Movie from "./movie.js";

const API_KEY = "e9fadf4953b149e422f6c73e6985c400";
const DEFAULT_QUERY = "trending/all/day";
const API = "https://api.themoviedb.org/3/";
let API_QUERY = "trending/all/day";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    if (this.props.type == "trending") {
      API_QUERY = "trending/all/day";
      fetch(`${API}${API_QUERY}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({ movies: data.results }));
    } else if (this.props.type == "director") {
      API_QUERY = "person/287/movie_credits";
      fetch(`${API}${API_QUERY}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({ movies: data.cast }));
    } else if (this.props.type == "today") {
      API_QUERY = "discover/movie";
      fetch(
        `${API}${API_QUERY}?api_key=${API_KEY}&sort_by=popularity.desc&page100`
      )
        .then(response => response.json())
        .then(data => this.setState({ movies: data.results }));
    }

    console.log(this.state.movies);
  }

  render() {
    return (
      <div className="movieRow">
        {this.state.movies.map(movie => (
          <Movie
            title={movie.original_title}
            image={movie.poster_path}
            id={movie.id}
            release_date={movie.release_date}
          />
        ))}
      </div>
    );
  }
}

export default Movies;
