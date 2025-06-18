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
const csv = `animal_type,has_legs,can_fly
bird,true,true
dog,true,false
fish,false,false`;

const array = CSV.parse(csv);

console.log(array);
```

### Stringify

```js
const array = [
  { animal_type: 'bird', has_legs: 'true', can_fly: 'true' },
  { animal_type: 'dog', has_legs: 'true', can_fly: 'false' },
  { animal_type: 'fish', has_legs: 'false', can_fly: 'false' }
];

const csv = CSV.stringify(array);

console.log(csv);
```
