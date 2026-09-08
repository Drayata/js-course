import { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleSubsCount = () => {
    setCount((c) => c - step);
  };

  const handleAddCount = () => {
    setCount((c) => c + step);
  };

  return (
    <div>
      <div className="step">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="count">
        <button onClick={handleSubsCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={handleAddCount}>+</button>
      </div>
      <p>
        {count !== 0
          ? `${count > 0 ? `${count} days from today is  ${date.toDateString()}` : `${Math.abs(count)} days ago from today is  ${date.toDateString()}`}`
          : `Today is ${date.toDateString()}`}
      </p>
      {step !== 1 || count !== 0 ? (
        <button
          onClick={() => {
            setCount((c) => 0);
            setStep((s) => 1);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};
export default App;
