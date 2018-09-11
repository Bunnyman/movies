import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "./button";

const API_KEY = "e9fadf4953b149e422f6c73e6985c400";
const DEFAULT_QUERY = "trending/all/day";
const API = "https://api.themoviedb.org/3/";
const API_QUERY = "movie/";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: []
    };
  }

  componentDidMount() {
    fetch(
      `${API}${API_QUERY}${this.props.location.state.id}?api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => this.setState({ movieDetails: data }));
  }

  render() {
    return (
      <div className="movieDetails">
        <Link to="/">Back</Link>

        <h1> {this.state.movieDetails.original_title}</h1>
        <p>{this.state.movieDetails.overview}</p>
        <p>{this.state.movieDetails.release_date}</p>
        <img
          src={
            "https://image.tmdb.org/t/p/w500" +
            this.state.movieDetails.poster_path
          }
          alt=""
        />
      </div>
    );
  }
}

export default MovieDetails;
