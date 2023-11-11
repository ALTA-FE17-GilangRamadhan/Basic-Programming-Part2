function palindrome(string: string): boolean | any {
  let arr: string[] = string.split("");
  let newArr: string[] = [];

  for (let i: number = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  let reverse: string = newArr.join("");

  if (reverse == string) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false
