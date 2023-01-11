import React from "react";

function Buttons({ btnGood, btnNeutral, btnBad }) {
  return (
    <div>
      <button onClick={btnGood}>GOOD</button>
      <button onClick={btnNeutral}>NEUTRAL</button>
      <button onClick={btnBad}>BAD</button>
    </div>
  );
}

export default Buttons;
