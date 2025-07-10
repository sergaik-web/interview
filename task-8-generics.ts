/**
 * Задача: Понимание и использование дженериков (Generics).
 *
 * Дженерики позволяют создавать компоненты, которые могут работать с любыми типами данных,
 * сохраняя при этом строгую типизацию. Это делает код более гибким и переиспользуемым.
 *
 * Задание:
 * 1. Напишите дженерик-функцию `identity`, которая принимает один аргумент и возвращает его же.
 *    Функция должна сохранять тип переданного значения.
 *
 * 2. Напишите дженерик-функцию `getFirstElement`, которая принимает массив любого типа и возвращает его первый элемент.
 *    Если массив пуст, функция должна вернуть `undefined`.
 *
 * 3. Создайте дженерик-интерфейс `Container<T>`, который описывает объект с одним свойством `value` типа `T`.
 *
 * 4. Напишите дженерик-функцию `createContainer`, которая принимает значение типа `T` и возвращает объект,
 *    соответствующий интерфейсу `Container<T>`.
 */

// 1. Дженерик-функция identity
// function identity...
// YOUR CODE HERE

const identity = <T>(value: T): T => {
  return value;
};

// 2. Дженерик-функция getFirstElement
// function getFirstElement...
// YOUR CODE HERE

const getFirstElement = <T>(arr: T[]): T | undefined => {
  return arr[0] || undefined;
};

// 3. Дженерик-интерфейс Container<T>
// interface Container...
// YOUR CODE HERE

interface Container<T> {
  value: T;
}

// 4. Дженерик-функция createContainer
// function createContainer...
// YOUR CODE HERE

const createContainer = <T>(value: T): Container<T> => {
  return { value };
};

// Пример использования (раскомментируйте для проверки)

const num = identity<number>(123);
const str = identity<string>("hello");
const obj = identity<{ a: number }>({ a: 1 });

console.log(num, str, obj);

// Проверка getFirstElement
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3: number[] = [];

const first1 = getFirstElement(arr1);
const first2 = getFirstElement(arr2);
const first3 = getFirstElement(arr3);

console.log(first1, first2, first3);

// Проверка Container и createContainer
const numberContainer = createContainer<number>(42);
const stringContainer = createContainer("TypeScript");

console.log(numberContainer.value);
console.log(stringContainer.value);
