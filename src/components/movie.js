import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "./button";

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.release_date === "2018-04-25") {
      <div>qweqweqweqweqw</div>;
    }
    return (
      <div className="movie_wrapper" key={this.props.title}>
        <div>
          {this.props.release_date === "2018-04-25"
            ? this.props.release_date
            : "yolo"}
        </div>
        <div className="movie">
          <img
            src={"https://image.tmdb.org/t/p/w300" + this.props.image}
            alt={this.props.title}
          />
          <h3>{this.props.title}</h3>
          <Link
            to={{
              pathname: `/movie/${this.props.id}`,
              state: { id: `${this.props.id}` }
            }}
          >
            More
          </Link>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
};

Movie.defaultProps = {
  title: "not specified",
  image: "not specified"
};

export default Movie;
