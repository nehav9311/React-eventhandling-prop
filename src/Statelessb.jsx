import React from "react";

class Statelessb extends React.Component {
  render() {
    return (
      <button onClick={this.props.handler} className="btn btn-danger">
        Number of clicks: {this.props.counter}
      </button>
    );
  }
}

export default Statelessb;
