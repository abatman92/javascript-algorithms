/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  const arr2 = []
  str.split(" ").forEach(element => arr2.push(`${element.slice(0, 1).toUpperCase()}${element.slice(1)}`))
  return res = arr2.join(' ')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость все простит')); // "Молодость Всё Простит"