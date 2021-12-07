function sumOfTwo(arr, sum) {
  let arr2 = []
  for (let i = 1; i <= arr.length; i++) {
      arr2.push(arr[0] + arr[i])
      arr2.push(arr[i] + arr[i + i])
      arr2.push(arr[i] + arr[i - i])
  }
  return arr2
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4))
