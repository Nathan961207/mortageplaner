import fileReader from "./fileReader.service";

test("File should exist and return data", () => {
  const customers = fileReader("prospects.txt");
  expect(customers).toBeDefined();
});

