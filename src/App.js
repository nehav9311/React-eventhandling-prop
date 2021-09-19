import React from "react";
import "./styles.css";
import Statelessb from "./Statelessb";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }
  render() {
    return (
      <div>
        <Statelessb counter={this.state.counter} handler={this.handleClick} />
      </div>
    );
  }
}

export default Content;
