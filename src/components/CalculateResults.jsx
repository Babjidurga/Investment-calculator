export default function ClculateResults({
  initialInvestment,
  rateOfReturns,
  duration,
  interestType,
}) {
  const annualData = [];
  if (interestType === "SI") {
    let firstInvestment = initialInvestment;
    for (let i = 1; i < parseInt(duration) + 1; i++) {
      let SNo = i;
      let intrestEarned = (
        (firstInvestment * i * rateOfReturns) /
        100
      ).toFixed();
      let totalValue = parseInt(firstInvestment) + parseInt(intrestEarned);
      annualData.push({
        SNo,
        firstInvestment,
        intrestEarned,
        totalValue,
      });
    }
  } else {
    let firstInvestment = initialInvestment;
    for (let i = 1; i < parseInt(duration) + 1; i++) {
      let SNo = i;
      let intrestEarned = ((firstInvestment * rateOfReturns) / 100).toFixed();
      let totalValue = parseInt(firstInvestment) + parseInt(intrestEarned);
      annualData.push({
        SNo,
        firstInvestment,
        intrestEarned,
        totalValue,
      });
      firstInvestment = totalValue;
    }
  }
  return annualData;
}
