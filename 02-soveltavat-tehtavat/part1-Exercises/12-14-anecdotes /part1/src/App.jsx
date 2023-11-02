import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);

  const [vote, setVote] = useState(new Uint16Array(anecdotes.length));

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const voteChange = () => {
    let copy = [...vote];

    copy[selected]++;

    setVote(copy);
  };

  const findMax = () => {
    let max = -1,
      maxKey = -1;
    for (let key in vote) {
      if (vote[key] > max) {
        maxKey = key;
        max = vote[key];
      }
    }
    return maxKey;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <h1>Has {vote[selected]} Votes</h1>
      <button style={{ display: "flex" }} onClick={selectRandom}>
        next anecdote
      </button>
      <button style={{}} onClick={voteChange}>
        Vote
      </button>

      <h2>Anecdote with most votes</h2>

      {anecdotes[findMax()]}
      <h3>has {vote[findMax()]} vote</h3>
    </div>
  );
};

export default App;
