/**
 * Задача: Понимание разницы между `type` и `interface`.
 *
 * В TypeScript есть два основных способа определения структуры объектов: `type` и `interface`.
 * Они во многом похожи, но имеют и ключевые различия.
 *
 * `interface` можно расширять (через `extends`) и "дополнять" (declaration merging).
 * `type` может определять не только объекты, но и любые другие типы (aliases), например, объединения (union) или пересечения (intersection).
 *
 * Задание:
 * 1. Создайте `interface` `IUser` с полями `id` (number) и `name` (string).
 * 2. Создайте `type` `TUser` с такими же полями.
 * 3. Расширьте `IUser`, создав новый `interface` `IAdmin`, который наследует `IUser` и добавляет поле `role` (string).
 * 4. Попробуйте "дополнить" `IUser`, объявив его еще раз и добавив поле `createdAt` (Date).
 * 5. Создайте `type` `TAdmin`, используя пересечение типов (`&`) с `TUser` и добавив поле `role` (string).
 * 6. Создайте `type` `TStringOrNumber`, который может быть либо строкой, либо числом.
 */

// 1. Создайте interface IUser
// YOUR CODE HERE

interface IUser {
  id: number;
  name: string;
}

// 2. Создайте type TUser
// YOUR CODE HERE

type TUser = {
  id: number;
  name: string;
};

// 3. Расширьте IUser для создания IAdmin
// YOUR CODE HERE

interface IAdmin extends IUser {
  role: string;
}

// 4. "Дополните" IUser, добавив поле createdAt
// YOUR CODE HERE

interface IUser {
  createdAt: Date;
}

// 5. Создайте TAdmin, используя пересечение типов
// YOUR CODE HERE

type TAdmin = TUser & {
  role: string;
};

// 6. Создайте type TStringOrNumber
// YOUR CODE HERE

type TStringOrNumber = string | number;

const user: IUser = {
  id: 1,
  name: "John Doe",
  createdAt: new Date(),
};

const admin: IAdmin = {
  id: 2,
  name: "Jane Doe",
  role: "administrator",
  createdAt: new Date(),
};

const userType: TUser = {
  id: 3,
  name: "Sam Smith",
};

const adminType: TAdmin = {
  id: 4,
  name: "Alex Johnson",
  role: "moderator",
};

const value1: TStringOrNumber = "hello";
const value2: TStringOrNumber = 123;

console.log(user, admin, userType, adminType, value1, value2);
