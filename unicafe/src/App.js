import { useState } from "react";
import StatisticsLine from "./Components/StatisticsLine.jsx";
import Buttons from "./Components/Buttons.jsx";
import Nofeedback from "./Components/Nofeedback.jsx";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnGood = () => {
    setGood(good + 1);
  };

  const btnBad = () => {
    setBad(bad + 1);
  };
  const btnNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Buttons btnGood={btnGood} btnBad={btnBad} btnNeutral={btnNeutral} />
      <h2>Statistics</h2>
      <StatisticsLine text={"good"} value={good} />
      <StatisticsLine text={"bad"} value={bad} />
      <StatisticsLine text={"neutral"} value={neutral} />
      <Nofeedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
