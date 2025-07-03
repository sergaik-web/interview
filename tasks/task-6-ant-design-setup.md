# Задача 6: Установка и настройка Ant Design

## Цель:
Научиться устанавливать и настраивать UI-библиотеку Ant Design в Next.js проекте, а также использовать ее компоненты.

## Теоретическая часть:
Ant Design - это популярная UI-библиотека для React, которая предоставляет высококачественные компоненты для создания корпоративных приложений. Она следует принципам Ant Design (дизайн-система) и предлагает широкий набор готовых к использованию компонентов, что значительно ускоряет разработку интерфейсов.

## Задание:

Мы установим Ant Design и используем несколько его компонентов для демонстрации.

### Часть 1: Установка Ant Design

1.  **Установите Ant Design**: Вам нужно будет выполнить команду в терминале:
    `npm install antd`

### Часть 2: Настройка и использование компонентов

1.  **Импортируйте стили Ant Design**:
    *   В `pages/_app.tsx` добавьте импорт стилей Ant Design. Для Ant Design 5 (текущая версия) это `import 'antd/dist/reset.css';`.
2.  **Используйте компоненты Ant Design**:
    *   В `pages/index.tsx` (или в новом компоненте, который вы создадите для демонстрации) импортируйте несколько компонентов Ant Design, например, `Button`, `DatePicker`, `Input`.
    *   Отобразите эти компоненты на странице.
    *   Попробуйте добавить базовые свойства к этим компонентам (например, `type="primary"` для `Button`, `placeholder` для `Input`).

## Места для реализации кода:

### `pages/_app.tsx` (изменить существующий файл)

```typescript
import type { AppProps } from 'next/app';
import '../src/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../src/store';

// --- Место для импорта стилей Ant Design ---
// TODO: Добавьте импорт стилей Ant Design
// import 'antd/dist/reset.css'; // Для Ant Design 5
// --- Конец места для импорта стилей Ant Design ---

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
```

### `pages/index.tsx` (изменить существующий файл)

```typescript
import React from 'react';
import ReduxCounter from '../src/components/ReduxCounter';
// --- Место для импорта компонентов Ant Design ---
// TODO: Импортируйте компоненты Ant Design, например, Button, DatePicker, Input
// import { Button, DatePicker, Input } from 'antd';
// --- Конец места для импорта компонентов Ant Design ---

const HomePage: React.FC = () => {
  return (
    <div>
      <ReduxCounter />

      {/* --- Место для использования компонентов Ant Design --*/}
      {/* TODO: Добавьте здесь несколько компонентов Ant Design */}
      {/* <Button type="primary">Primary Button</Button> */}
      {/* <DatePicker /> */}
      {/* <Input placeholder="Basic usage" /> */}
      {/* --- Конец места для использования компонентов Ant Design --*/}
    </div>
  );
};

export default HomePage;
```
