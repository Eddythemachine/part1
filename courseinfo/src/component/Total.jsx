import React from "react";

function Total({ part }) {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {part[0].exercises + part[1].exercises + part[2].exercises}
      </p>
    </div>
  );
}

export default Total;
