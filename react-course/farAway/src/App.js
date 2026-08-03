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

  const handleSubsStep = () => {
    setStep((s) => s - 1);
  };

  const handleAddStep = () => {
    setStep((s) => s + 1);
  };

  const handleSubsCount = () => {
    setCount((c) => c - step);
  };

  const handleAddCount = () => {
    setCount((c) => c + step);
  };

  return (
    <div>
      <div className="step">
        <button onClick={handleSubsStep}>-</button>
        Step: {step}
        <button onClick={handleAddStep}>+</button>
      </div>
      <div className="count">
        <button onClick={handleSubsCount}>-</button>
        Count: {count}
        <button onClick={handleAddCount}>+</button>
      </div>
      <p>
        {count !== 0
          ? `${count > 0 ? `${count} days from today is  ${date.toDateString()}` : `${Math.abs(count)} days ago from today is  ${date.toDateString()}`}`
          : `Today is ${date.toDateString()}`}
      </p>
    </div>
  );
};
export default App;
