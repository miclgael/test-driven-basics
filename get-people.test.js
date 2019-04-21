/* These are the functions we will be testing*/
const {
  getPeople, 
  justNames,
  findByAge
} = require('./get-people');

/* This is our data */
const people = [
  { name: "Michael", age: 31 }, 
  { name: "Dr Dre",  age: 12 } 
];

/* Unit tests */

//1. Checks that the function is defined.
it("is defined", () => {
  expect(getPeople())
    .toBeDefined()
})

it("Michael's age is 31", () => {
  expect(getPeople(people)[0].age)
    .toEqual(31)
})

it("Person 2 is Dr. Dre", () => {
  expect(justNames(people)[1])
    .toBe("Dr Dre")
})

it("finds Michael by age", () => {
  expect(justNames(findByAge(people, 31))[0])
    .toEqual("Michael")
})