import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating
        onSetRating={setRating}
        messages={[
          "hello",
          "hi",
          "how",
          "where",
          "when",
          "wdfghere",
          "whefgn",
          "fasf",
        ]}
        maxRating={8}
        color="red"
        size={26}
      />
      <p>{rating} ratings</p>
    </div>
  );
}
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      messages={["hello", "hi", "how", "where", "when"]}
      maxRating={5}
      color="green"
      size={24}
    />
    <Test />
  </React.StrictMode>
);
