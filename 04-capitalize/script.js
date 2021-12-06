/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const arr = str.split(" ")
  let arr2 = []
  for (let i = 0; i<arr.length; i++) {
   arr2.push(`${arr[i].slice(0, 1).toUpperCase()}${arr[i].slice(1)}`)
  }
  return res = arr2.join(' ')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость все простит')); // "Молодость Всё Простит"