// MITASK Q-TASK
function hasProperty(
  obj: Record<string, unknown>, // key=string, value=any
  str: string
): boolean {
  return Object.keys(obj).includes(str);
}
console.log(
  hasProperty({ name: "BMW", model: "M3" }, "model")
); // true
console.log(
  hasProperty({ name: "BMW", model: "M3" }, "year")
); // false



// MITASK P-TASK
/* function objectToArray(obj: { [key: string]: any }): [string, any][] {
  let result: [string, any][] = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

console.log(objectToArray({ a: 10, b: 20 }));
console.log(objectToArray({ c: 30, d: 40 }));
*/

/* 
  Traditional FD => BSSR => EJS
  Modern FD      => SPA  => React
*/

// MITASK O-TASK
/* function calculateSumOfNumbers(arr: any[]): number {
  let sum = 0;

  for (let item of arr) {
    if (typeof item === "number") {
      sum += item;
    }
  }

  return sum;
}
console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // 45
console.log(calculateSumOfNumbers([20, "20", { son: 20 }, true, 45])); // 65
*/

/* Project Standars:
    - Logging standards
    - Naming standards:
          functions, method, variable => CAMEL
          class => PASCAL
          folder, file => KEBAB
          css => SNAKE
    - Error handling
*/

/*
  Traditional API
  REST API
  GraphQL API
  ...
 */

// MITASK N-TASK
/* function palindromCheck(str: string): boolean {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}
console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
console.log(palindromCheck("mom")); // true
*/

// MITASK M-TASK
/* function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
  let result: { number: number; square: number }[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push({
      number: arr[i],
      square: arr[i] * arr[i],
    });
  }
  return result;
}
console.log(getSquareNumbers([1, 2, 3]));
console.log(getSquareNumbers([4, 5, 6]));

// MITASK L-TASK
function reverseSentence(str: string): string {
  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let reversed = "";

    for (let j = words[i].length - 1; j >= 0; j--) {
      reversed += words[i][j];
    }

    result += reversed + " ";
  }

  return result.trim();
}

console.log(reverseSentence("we like coding"));
console.log(reverseSentence("leo"));  


*/
