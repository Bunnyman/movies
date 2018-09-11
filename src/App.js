import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Movies from "./components/movies.js";

import Movie from "./components/movie.js";
import MovieDetails from "./components/movieDetails";

const API_KEY = "e9fadf4953b149e422f6c73e6985c400";
const DEFAULT_QUERY = "trending/all/day";
const API = "https://api.themoviedb.org/3/movie/76341?api_key=";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header subtitle="This is subtitle" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
