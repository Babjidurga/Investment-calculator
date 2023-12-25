import CalculateResults from "./CalculateResults";
export default function Results({ data }) {
  const resultsCalculated = CalculateResults(data);
  console.log(resultsCalculated);
  return (
    <section id="results-container">
      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Invested Amount (Year)</th>
            <th>Interest Earned </th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {resultsCalculated.map((yearData) => {
            return (
              <tr key={yearData.SNo}>
                <td>{yearData.SNo}</td>
                <td> ₹{yearData.firstInvestment}</td>
                <td>₹{yearData.intrestEarned}</td>
                <td>₹{yearData.totalValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
