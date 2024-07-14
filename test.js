const CSV = require("./csv");

const csv = `name,gender,age
Ashlynn,female,25
Haley,female,25
Carlos,male,28
Kua,male,23`;

const array = CSV.parse(csv);

console.log(array);

const original = CSV.stringify(array);

console.log();

console.log(original);
