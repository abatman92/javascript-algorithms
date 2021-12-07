/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
  const numArr = []
  for(let n = 2; n <= num; n++) {
    function isPrime(n) { 
      if (n <= 1) {
        return false
      }
      if (n === 2) {
        return true
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false
        }
        else {
          continue
        }
      }
      return true
    }
    if (isPrime(n) === true){
      numArr.push(n)
    }
  }
  return numArr
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
console.log(primes(25))