function makeChange(amount) {
  // Define the values of each coin
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize variables to store the counts of each coin
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of quarters
  quarters = Math.floor(amount / quarterValue);
  // Update the remaining amount
  amount %= quarterValue;

  // Calculate the number of dimes
  dimes = Math.floor(amount / dimeValue);
  // Update the remaining amount
  amount %= dimeValue;

  // Calculate the number of nickels
  nickels = Math.floor(amount / nickelValue);
  // Update the remaining amount
  amount %= nickelValue;

  // The remaining amount at this point is less than a nickel, so it's represented in pennies
  pennies = Math.floor(amount / pennyValue);

  // Create and return the result object
  const result = {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies
  };

  return result;
}
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));