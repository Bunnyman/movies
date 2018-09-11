import React from "react";

class Button extends React.Component {
  render() {
    return (
      <a onClick={this.props.buttonChange} href="">
        {this.props.title}
      </a>
    );
  }
}

export default Button;
