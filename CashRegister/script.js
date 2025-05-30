// Cash Register
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
  ]; // defining the currency units and their values
  let change = cash - price; 
  let changeArr = [];
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2); // calculating the total cash in drawer

  if (change > totalCid) return "Insufficient Funds"; // if change is greater than total cash in drawer
  if (change === parseFloat(totalCid)) return "Closed"; // if change is equal to total cash in drawer

  for (let i = currencyUnit.length - 1; i >= 0; i--) {
    let coinName = currencyUnit[i][0];
    let coinValue = currencyUnit[i][1];
    let coinAmount = cid[i][1];

    while (change >= coinValue && coinAmount > 0) {
      change -= coinValue;
      change = change.toFixed(2);
      coinAmount -= coinValue;
      changeArr.push([coinName, coinValue]);
    }
  }
  
  return changeArr.length > 0 ? changeArr : "Insufficient Funds";
}