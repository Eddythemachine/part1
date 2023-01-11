import { Component } from "react";

class Content extends Component {
  render() {
    const { part } = this.props;
    return (
      <>
        <p>
          {part[0].name} {part[0].exercises}
        </p>{" "}
        <p>
          {part[1].name} {part[1].exercises}
        </p>{" "}
        <p>
          {part[2].name} {part[2].exercises}
        </p>
      </>
    );
  }
}

export default Content;
