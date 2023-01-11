import React from "react";

function StatisticsLine({ text, value }) {
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
}

export default StatisticsLine;
