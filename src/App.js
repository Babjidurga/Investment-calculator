import { useState } from "react";
import Results from "./components/Results.jsx";
import Header from "./components/Header.jsx";
import money from "./assests/money_logo.png";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    rateOfReturns: 5,
    duration: 12,
    interestType: "SI",
  });

  function handleChangedData(name, value) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="content-con">
        <h3 className="header-heading">
          Simple and Compound Interest Calculator
        </h3>
        <img src={money} alt="money logo" />
      </div>

      <Header userInput={inputData} onChangeData={handleChangedData} />
      {inputData.duration <= 0 ? <p className="invalidDuration">Please enter a Valid duration</p> : <Results data={inputData} />}
      
    </main>
  );
}
export default App;
