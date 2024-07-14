/**
 * Parse a string containing lines of comma-separated values into an array of records.
 *
 * @param {string} csv
 * A string containing lines of comma-separated values.
 *
 * @returns {any[]} An array of records.
 */
function parse(
  csv
) {
  const rows = csv
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim()));

  const keys = rows.shift();

  const array = [];

  for (const row of rows) {
    const object = {};

    for (const key of keys) {
      value = row[keys.indexOf(key)];

      try {
        value = JSON.parse(value);
      } catch {}

      object[key] = value;
    }

    array.push(object);
  }

  return array;
}

/**
 * Convert a value, or an array of values, into a string containing rows of comma-separated values.
 *
 * @param {any} value
 * A value to convert into a string containing rows of comma-separated values.
 *
 * @returns {string}
 * A string containing rows of comma-separated values.
 */
function stringify(
  value
) {
  // If the value is a function, stringify it.
  if (typeof value === "function") return `"${value.toString().replaceAll("\"", "\\\"")}"`;

  // If the value is not an object, stringify it.
  if (typeof value !== "object") return JSON.stringify(value);

  if (!(value instanceof Array)) {
    return stringify( [ value ] );
  }

  let csv = "";

  const array = value;
  const object = array[0];

  const keys = Object.keys(object);

  csv += keys.map(key => key.includes(" ") ? JSON.stringify(key) : key).join(",") + "\n";

  for (
    let i = 0;
    i < array.length;
    i++
  ) {
    keys.map(
      key => csv += array[i][key] + ","
    );

    csv = csv.substring(0, csv.length - 1) + "\n";
  }

  return csv;
}

const CSV = Object.freeze(
  {
    parse,
    stringify
  }
);

module.exports = CSV;
