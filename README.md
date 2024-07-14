# `@voidvoxel/csv`

`csv` is designed to be a CSV analogue to the standard JSON module.

## Installation

```sh
npm i @voidvoxel/csv
```

## Importing

### Module

```js
import * as CSV from "@voidvoxel/csv";
```

### CommonJS

```js
const CSV = require("@voidvoxel/csv");
```

## Usage

### Parse

```js
const csv = `name,gender,age
Ashlynn,female,25
Haley,female,25
Carlos,male,28
Kua,male,23`;

const array = CSV.parse(csv);

console.log(array);
```

### Stringify

```js
const array = [
  { name: 'Ashlynn', gender: 'female', age: '25' },
  { name: 'Haley', gender: 'female', age: '25' },
  { name: 'Carlos', gender: 'male', age: '28' },
  { name: 'Kua', gender: 'male', age: '23' }
];

const csv = CSV.stringify(array);

console.log(csv);
```
