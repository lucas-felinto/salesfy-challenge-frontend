import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./style/GlobalStyles";

const App: React.FC = () => {
  return (
    <div className="App">
      {" "}
      <GlobalStyles />
      <Header />{" "}
    </div>
  );
};

export default App;
