import React from "react";
import Movies from "./movies";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Movies type="trending" />
        <Movies type="director" />
        <Movies type="today" />
      </div>
    );
  }
}

export default Home;
