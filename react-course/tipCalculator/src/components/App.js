import { useState } from "react";
import BillInput from "./BillInput";
import YourService from "./YourService";
import FriendService from "./FriendService";
import Result from "./Result";
import Reset from "./Reset";

const App = () => {
  const [billInput, setBillInput] = useState(0);
  const [friendService, setFriendService] = useState(0);
  const [yourService, setYourService] = useState(0);

  const handleReset = () => {
    setBillInput(0);
    setYourService(0);
    setFriendService(0);
  };

  return (
    <div>
      <BillInput billInput={billInput} onBillInput={setBillInput} />
      <YourService yourService={yourService} onYourService={setYourService} />
      <FriendService
        friendService={friendService}
        onFriendService={setFriendService}
      />
      {billInput || yourService || friendService ? (
        <>
          <Result
            billInput={billInput}
            friendService={friendService}
            yourService={yourService}
          />
          <Reset onReset={handleReset} />
        </>
      ) : null}
    </div>
  );
};

export default App;
