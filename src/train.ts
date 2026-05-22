// MITASK M-TASK
function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
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
