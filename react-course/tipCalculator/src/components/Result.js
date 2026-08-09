const Result = ({ billInput, yourService, friendService }) => {
  let totalTip;
  if (yourService === 0 && friendService === 0) {
    totalTip = 0;
  } else {
    totalTip = (friendService + yourService) / 2;
  }

  const result = Math.round(billInput * ((100 + totalTip) / 100));
  return (
    <h1>
      You Pay ${result} (${billInput} + {result - billInput}$ tip)
    </h1>
  );
};

export default Result;
