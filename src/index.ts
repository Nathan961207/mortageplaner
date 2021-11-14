import fileReader from "./services/fileReader.service";
import { calculateMortage } from "./services/calculateMortage.service";

async function init() {
  const customers = await fileReader("prospects.txt");
  customers.forEach((customer, index) => {
    const formula = calculateMortage(customer, index);
    console.log(
      `Prospect ${index + 1}: ${customer.customer} wants to borrow ${
        customer.total_loan
      } € for a period of ${customer.years} years and pay ${formula} € each month`
    );
  });
}
init();
