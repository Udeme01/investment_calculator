// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100); // 6% === 6/100 = 0.06
    investmentValue += interestEarnedInYear + annualInvestment;

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// me explainging the code so I also won't forget what's happening here!
// INITIAL_INVESTMENT: initial money the investor makes which could be any amount, in this case it's hard-coded to be $15000.(but can be changed by a user/investor)...

// ANNUAL_INVESTMENT: the money or amount an investor invests every year, in this case it's $1200 every year.

// INTEREST_EARNED_IN_A_YEAR(interest): This is different for every year, and it's calculated by multiplying the initial_Investment for the 1st year by the expectedReturn.{$15000 initialInvestment * 6% expectedReturn} (NB: expectedReturn explained below)... 

// ...The interest is different for every year, so the value at the end of the year is now going to be the new initialInvestment at the end of each year, so you'll use this to calculated for the new interest of a particular year.

// EXPECTED_RETURN: This value is hard-coded to be 6 and it's in percentage though not specified in code - 6%.

// DURATION: is hard-coded to be 10years, and a for loop is used to loop through the number of years the investor invests...
