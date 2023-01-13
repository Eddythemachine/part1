import { useState } from "react";

const vote = [0, 0, 4, 6, 4, 6, 2];
const copy = [...vote];
const App = () => {
  // States

  let [randomNumber, setRandomNumber] = useState(0);

  //
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const changeNo = () => {
    setSelected(randomNumber);
    setRandomNumber(Math.floor(Math.random() * 7));
    // console.log("random number", randomNumber);
  };

  const highestVote = Math.max(...copy);
  const IndexOfTheHighestVote = copy.indexOf(highestVote);
  const voteAne = () => {
    copy[randomNumber] += 1;
    console.log(highestVote);
    console.log(copy);
    console.log("Index of the highest vote", IndexOfTheHighestVote);
  };

  // console.log(IndexOfTheHighestVote);
  // console.log(copy);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={changeNo}>next anecdotes</button>
      <div>
        <button onClick={voteAne}>Vote </button>
      </div>
      <h2>Anecdote with most vote</h2>
      <p>{anecdotes[IndexOfTheHighestVote]}</p>
    </div>
  );
};

export default App;
