import { CustomerData } from "src/model/customerData.Model";
import { calculateMortage } from "./calculateMortage.service";

test("Mortage should be correct", () => {
  let testCustomer: CustomerData = {
    customer: "Test Testerson",
    interest: 2,
    total_loan: 1000,
    years: 2,
  };
  expect(calculateMortage(testCustomer, 1)).toBeGreaterThanOrEqual(42.54);
});


