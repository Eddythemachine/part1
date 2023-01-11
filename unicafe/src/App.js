import { useState } from "react";
import Buttons from "./Components/Buttons.jsx";
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
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <div>
        <p>all: {good + bad + neutral}</p>
        <p>average: {good - bad - 0}</p>
        <p>positive: {0 || (good / (good + bad + neutral)) * 100}</p>
      </div>
    </div>
  );
}

export default App;
