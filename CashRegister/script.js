function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]; // Define the currency units with their values

  let changeDue = cash - price;
  let totalCid = parseFloat(cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));
  let result = { status: null, change: [] }; // Initializing the result object

  if (changeDue > totalCid) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  if (changeDue === totalCid) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  const changeArr = [];
  const reversedCid = cid.reverse();

  for (let i = 0; i < currencyUnit.length; i++) { // Iterate through each currency unit
    let coinName = reversedCid[i][0];
    let coinValue = currencyUnit.find(c => c[0] === coinName)[1];
    let coinTotal = reversedCid[i][1];
    let coinToReturn = 0;

    while (changeDue >= coinValue && coinTotal > 0) { // While we still need change and have coins available
      changeDue -= coinValue;
      changeDue = parseFloat(changeDue.toFixed(2));
      coinTotal -= coinValue;
      coinToReturn += coinValue;
    }

    if (coinToReturn > 0) {
      changeArr.push([coinName, parseFloat(coinToReturn.toFixed(2))]);
    }
  }

  if (changeDue > 0) { // If we still have change left to give
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }

  result.status = "OPEN"; // If we successfully calculated the change
  result.change = changeArr;
  return result;
}
