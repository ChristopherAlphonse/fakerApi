const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extented: true }));

const newUser = [
  {
    _id: faker.datatype.uuid(),
    LastName: faker.name.lastName(),
    FirstName: faker.name.firstName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
];

const fakerCompany = [
  {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    state: faker.address.state(),
    country: faker.address.country(),
  },
];

app.get("/api/user/new", (req, res) => {
  res.json(newUser);
});

app.get("/api/fakerCompany/new", (req, res) => {
  res.json(fakerCompany);
});

app.get("/api/user/company", (req, res) => {
  const object = {
    newUser: newUser,
    newCompany: fakerCompany,
  };
  res.json(object);
});

app.listen(port, () => console.log(`Running on port: ${port}`));
