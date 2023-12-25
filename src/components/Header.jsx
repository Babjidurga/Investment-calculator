export default function Header({ userInput, onChangeData }) {
  return (
    <header id="header-component">
      <div id="user-input-con">
        <div className="user-data">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChangeData("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Rate of returns</label>
            <input
              type="number"
              value={userInput.rateOfReturns}
              onChange={(event) =>
                onChangeData("rateOfReturns", event.target.value)
              }
            />
          </p>
        </div>
        <div className="user-data">
          <p>
            <label>Duration (Years)</label>
            <input
              type="number"
              value={userInput.duration}
              onChange={(event) => onChangeData("duration", event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="interest-selection">Type of Interest</label>
            <select
              name="interest"
              id="interest-selection"
              onChange={(event) =>
                onChangeData("interestType", event.target.value)
              }
            >
              <option value="SI">Simple Interest</option>
              <option value="CI">Compound Interest</option>
            </select>
          </p>
        </div>
      </div>
    </header>
  );
}
