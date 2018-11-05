// #region Constants

export const NoLoanAlertText = `With 3 or more current Personal Loans,
a new loan application is not possible in this flow`;

// #endRegion


// #region Functions

export const numberWithCommas = (num: number) => {
  return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
};

// #endRegion
