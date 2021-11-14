import { CustomerData } from "../model/customerData.Model";

export const calculateMortage = (customerData: CustomerData, index: number) => {
  const T = customerData.total_loan;
  const P = customerData.years * 12;
  const I = customerData.interest / 100 / 12;
  const formula = (T * I * (1 + I) ** P) / ((1 + I) ** P - 1);

  return parseFloat(formula.toFixed(2));
};
