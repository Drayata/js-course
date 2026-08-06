import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => {
    if (step === 1) return;
    setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step === 3) return;
    setStep((s) => s + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>

          <p className="message">
            {step}. {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button onClick={handlePrev} textColor="#fff" bgColor="#7950f2">
              {" "}
              {`<--`}Previous{" "}
            </Button>
            <Button onClick={handleNext} textColor="#fff" bgColor="#7950f2">
              {" "}
              Next{`-->`}{" "}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
