/**
 * Задача: Использование утилитарных типов (Utility Types).
 *
 * TypeScript предоставляет несколько утилитарных типов для облегчения общих преобразований типов.
 * Они помогают создавать новые типы на основе существующих.
 *
 * Некоторые популярные утилитарные типы:
 * - `Partial<T>`: Делает все свойства типа `T` необязательными.
 * - `Readonly<T>`: Делает все свойства типа `T` доступными только для чтения.
 * - `Pick<T, K>`: Создает новый тип, выбирая из `T` только набор свойств `K`.
 * - `Omit<T, K>`: Создает новый тип, удаляя из `T` набор свойств `K`.
 * - `Record<K, T>`: Создает тип объекта, где ключи имеют тип `K`, а значения — тип `T`.
 *
 * Задание:
 * 1. Определите интерфейс `ITodo` с полями: `id` (number), `title` (string), `description` (string), `completed` (boolean).
 * 2. Создайте тип `TUpdateTodo`, который представляет объект для обновления задачи.
 *    Он должен содержать только те поля, которые можно изменить, и все они должны быть необязательными. Используйте `Partial` и `Pick`.
 * 3. Создайте тип `TReadOnlyTodo`, который делает все поля `ITodo` доступными только для чтения. Используйте `Readonly`.
 * 4. Создайте тип `TTodoPreview`, который содержит только `id` и `title` из `ITodo`. Используйте `Pick`.
 * 5. Создайте тип `TTodoDetails`, который содержит все поля `ITodo`, кроме `id`. Используйте `Omit`.
 * 6. Создайте тип `TTodoMap`, который представляет словарь (объект), где ключами являются `id` задачи (в виде строки),
 *    а значениями — сами задачи (`ITodo`). Используйте `Record`.
 */

// 1. Интерфейс ITodo
// interface ITodo...
// YOUR CODE HERE
interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// 2. Тип TUpdateTodo (частичные и выбираемые поля)
// type TUpdateTodo = ...
// YOUR CODE HERE
type TUpdateTodo = Partial<Pick<ITodo, "title" | "description" | "completed">>;

// 3. Тип TReadOnlyTodo (только для чтения)
// type TReadOnlyTodo = ...
// YOUR CODE HERE

type TReadOnlyTodo = Readonly<ITodo>;

// 4. Тип TTodoPreview (только id и title)
// type TTodoPreview = ...
// YOUR CODE HERE

type TTodoPreview = Pick<ITodo, "id" | "title">;

// 5. Тип TTodoDetails (все, кроме id)
// type TTodoDetails = ...
// YOUR CODE HERE

type TTodoDetails = Omit<ITodo, "id">;

// 6. Тип TTodoMap (словарь задач)
// type TTodoMap = ...
// YOUR CODE HERE

type TTodoMap = Record<string, ITodo>;

// Пример использования (раскомментируйте для проверки)

const todo: ITodo = {
  id: 1,
  title: "Learn TypeScript",
  description: "Study utility types",
  completed: false,
};

const update: TUpdateTodo = {
  title: "Master TypeScript",
  completed: true,
};

const readonlyTodo: TReadOnlyTodo = {
  id: 2,
  title: "Readonly Task",
  description: "Cannot be changed",
  completed: false,
};
// readonlyTodo.title = 'New title'; // Ошибка!

const preview: TTodoPreview = {
  id: 3,
  title: "Just a preview",
};

const details: TTodoDetails = {
  title: "Task Details",
  description: "Full description here",
  completed: true,
};

const todoMap: TTodoMap = {
  "1": { id: 1, title: "Task 1", description: "...", completed: false },
  "2": { id: 2, title: "Task 2", description: "...", completed: true },
};

console.log(todo, update, readonlyTodo, preview, details, todoMap);
