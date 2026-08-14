import React from "react";
import ReactDOM from "react-dom/client";
// import StarElement from "./StarElement";
import "./index.css";
import App from "./App";

// function Bintang() {
//   const [rating, setRating] = useState(0);
//   return (
//     <div>
//       <StarElement color="green" setOnRating={setRating} />
//       <p>film is rated {rating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarElement maxRatings={10} />
    <StarElement
      maxRatings={5}
      color="red"
      size={30}
      messages={["very bad", "bad", "okay", "good", "very good"]}
    />
    <Bintang /> */}
  </React.StrictMode>,
);
