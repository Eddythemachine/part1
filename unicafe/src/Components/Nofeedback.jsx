import React from "react";

function Nofeedback({ good, bad, neutral }) {
  if (good + bad + neutral < 1) {
    return <p>No feedback</p>;
  }

  return (
    <div>
      {" "}
      <p>average: {good - bad - 0}</p>
      <p>positive: {(good / (good + bad + neutral)) * 100}</p>
      <p>all: {good + bad + neutral}</p>
    </div>
  );
}

export default Nofeedback;
