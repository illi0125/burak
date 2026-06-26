// MITASK Y-TASK 
function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(item => arr2.includes(item));
}
console.log(findIntersection([1, 2, 3], [3, 2, 0]));
console.log(findIntersection(["a", "b", "c"], ["a", "b"])); 
// <T> - har xil qiymatlar (str, num...)



// MITASK X-TASK 
/* function countOccurrences(obj: any, key: string): number {
  let count = 0;
  for (const k in obj) {
    if (k === key) {
      count++;
    }
    if (typeof obj[k] === "object" && obj[k] !== null) {
      count += countOccurrences(obj[k], key);
    }
  }
  return count;
}
const data = {
  model: "Bugatti",
  steer: {
    model: "HANKOOK",
    size: 30
  }
};
console.log(countOccurrences(data, "model")); // 2

const obj = {
  name: "Leo",
  info: {
    name: "Sam",
    car: {
      name: "BMW"
    }
  }
};
console.log(countOccurrences(obj, "name")); // 3
*/

// MITASK W-TASK 
/* function chunkArray(arr: number[], size: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3));
console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 5));
*/

// MITASK V-TASK 
/* function countChars(str: string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const char of str) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(countChars("hello"));
console.log(countChars("yellow"));
*/



// MITASK T-TASK 
/* function sumOdds(n: number): number {
  return Math.floor(n / 2);
}

console.log(sumOdds(9));  // 4
console.log(sumOdds(11)); // 5
*/



// MITASK T-TASK 
/* function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const result = arr1.concat(arr2);
  return result.sort((a, b) => a - b);
}
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([33, 3, 22, 316], [47, 56, 30]));
*/



// MITASK R-TASK 
/* function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
}
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1]));    // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
*/


/* Validation:
  Frontend Validation
  Backend Validation
  Database Validation
*/


// MITASK R-TASK
/*function calculate(str: string): number {
  const numbers = str.split("+");
  return Number(numbers[0]) + Number(numbers[1]);
}
console.log(calculate("1+3")); // 4
console.log(calculate("10+5")); // 15
*/

// MITASK Q-TASK
/* function hasProperty(
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
*/


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

/* Request
  Traditional API
  REST API
  GraphQL API
  ...
 */

/* Cookies:
  request join
  self destroy
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
