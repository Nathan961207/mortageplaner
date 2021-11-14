import * as fs from "fs";
import * as csv from "csv-parser";
import { CustomerData } from "../model/customerData.Model";

export default async function (fileName: string): Promise<CustomerData[]> {
  return new Promise((resolve, reject) => {
    const customers: CustomerData[] = [];
    fs.createReadStream(`./${fileName}`, "utf-8")
      .pipe(csv())
      .on("data", (row: any) => {
        let customerData = new CustomerData();

        let name = row["Customer"].replace(/[[!@#$%^&*,.]/g, " ");
        customerData.customer = name;
        customerData.total_loan = row["Total loan"];
        customerData.interest = row["Interest"];
        customerData.years = row["Years"];

        customers.push(customerData);
      })
      .on("end", () => {
        resolve(customers);
      })
      .on("error", (err: any) => {
        reject("Error, file not found");
      });
  });
}
