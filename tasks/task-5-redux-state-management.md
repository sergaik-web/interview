# Задача 5: Глобальное управление состоянием (Redux Toolkit с combineReducers)

## Цель:
Понять принципы глобального управления состоянием в React-приложениях с использованием Redux и Redux Toolkit, а также явно использовать `combineReducers` для объединения редьюсеров.

## Теоретическая часть:
Redux - это предсказуемый контейнер состояния для JavaScript-приложений. Он помогает писать приложения, которые ведут себя согласованно, работают в различных средах (клиент, сервер и нативный), и легко тестируются. Redux Toolkit - это официальный, рекомендуемый подход для написания Redux-логики. Он упрощает многие аспекты работы с Redux, такие как настройка стора, создание редьюсеров и экшенов.

Основные концепции Redux:
- **Store**: Хранит все состояние приложения в одном месте.
- **Actions**: Объекты, описывающие, что произошло.
- **Reducers**: Чистые функции, которые принимают текущее состояние и экшен, и возвращают новое состояние.
- **Dispatch**: Метод для отправки экшенов в стор.
- **Selectors**: Функции для извлечения данных из стора.
- **`combineReducers`**: Утилита из Redux, которая помогает объединить несколько редьюсеров в один корневой редьюсер. Каждый редьюсер управляет своей частью состояния, а `combineReducers` собирает их в единое дерево состояния.

## Задание:

Мы реализуем простой счетчик, состояние которого будет храниться в Redux Store.

### Часть 1: Установка и настройка Redux Store

1.  **Установите необходимые пакеты**: Вам нужно будет выполнить команду в терминале:
    `npm install @reduxjs/toolkit react-redux`
2.  **Создайте Redux Store**:
    *   Создайте папку `src/store`.
    *   Внутри `src/store` создайте файл `index.ts` для настройки вашего Redux Store.
    *   Используйте `configureStore` из `@reduxjs/toolkit`.
3.  **Создайте Redux Slice**:
    *   В папке `src/store` создайте файл `counterSlice.ts`.
    *   Используйте `createSlice` из `@reduxjs/toolkit` для создания слайса счетчика. Он должен содержать:
        *   Начальное состояние (`initialState`) с полем `value: 0`.
        *   Редьюсеры для `increment`, `decrement` и `incrementByAmount`.
4.  **Подключите Slice к Store с `combineReducers`**:
    *   Импортируйте `counterSlice` в `src/store/index.ts`.
    *   Явно используйте `combineReducers` для создания корневого редьюсера.
5.  **Оберните приложение в `Provider`**:
    *   В `pages/_app.tsx` импортируйте `Provider` из `react-redux` и оберните ваше приложение в него, передав созданный стор.

### Часть 2: Взаимодействие с Redux Store из компонента

1.  **Создайте новый компонент `src/components/ReduxCounter.tsx`**.
2.  **Реализуйте в `ReduxCounter.tsx`:**
    *   Используйте хук `useSelector` из `react-redux` для получения текущего значения счетчика из стора.
    *   Используйте хук `useDispatch` из `react-redux` для получения функции `dispatch`.
    *   Создайте кнопки для `increment`, `decrement` и `incrementByAmount` (например, на 5).
    *   При нажатии на кнопки, диспатчите соответствующие экшены из `counterSlice`.
    *   Отобразите текущее значение счетчика.

### Интеграция:

1.  **Используйте `ReduxCounter` в `pages/index.tsx`**:
    Импортируйте и отобразите компонент `ReduxCounter` на главной странице.

## Места для реализации кода:

### `pages/_app.tsx` (изменить существующий файл)

```typescript
import type { AppProps } from 'next/app';
import '../src/styles/globals.css';
import { Provider } from 'react-redux'; // Импортируйте Provider
import { store } from '../src/store'; // Импортируйте ваш Redux Store

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // --- Место для Provider ---
    // TODO: Оберните Component в Provider
    // <Provider store={store}>
    //   <Component {...pageProps} />
    // </Provider>
    // --- Конец места для Provider ---
    <Component {...pageProps} /> // Временно, пока не обернете
  );
}

export default MyApp;
```

### `src/store/index.ts` (создать файл)

```typescript
import { configureStore, combineReducers } from '@reduxjs/toolkit'; // Импортируйте combineReducers
// TODO: Импортируйте ваш counterSlice.reducer
// import counterReducer from './counterSlice';

// TODO: Объедините редьюсеры с помощью combineReducers
// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

export const store = configureStore({
  // TODO: Используйте rootReducer здесь
  // reducer: rootReducer,
  reducer: {},
});

// TODO: Экспортируйте RootState и AppDispatch
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
```

### `src/store/counterSlice.ts` (создать файл)

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // TODO: Реализуйте редьюсеры increment, decrement, incrementByAmount
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### `src/components/ReduxCounter.tsx` (создать файл)

```typescript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// TODO: Импортируйте экшены и типы из вашего store
// import { RootState, AppDispatch } from '../store';
// import { increment, decrement, incrementByAmount } from '../store/counterSlice';

const ReduxCounter: React.FC = () => {
  // --- Место для useSelector и useDispatch ---
  // TODO: Получите значение счетчика из стора
  // const count = useSelector((state: RootState) => state.counter.value);
  // TODO: Получите функцию dispatch
  // const dispatch = useDispatch<AppDispatch>();
  // --- Конец места для useSelector и useDispatch ---

  return (
    <div>
      <h2>Redux Counter</h2>
      {/* TODO: Отобразите текущее значение счетчика */}
      {/* <p>Count: {count}</p> */}
      <div>
        {/* TODO: Добавьте кнопки для диспатча экшенов */}
        {/* <button onClick={() => dispatch(increment())}>Increment</button> */}
        {/* <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        {/* <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button> */}
      </div>
    </div>
  );
};

export default ReduxCounter;
```

### `pages/index.tsx` (изменить существующий файл)

```typescript
// ... (существующий код)

import ReduxCounter from '../src/components/ReduxCounter'; // Импортируйте новый компонент

const HomePage: React.FC = () => {
  return (
    <div>
      {/* ... (существующий код OptimizationDemo) */}

      {/* Место для использования ReduxCounter */}
      {/* TODO: Добавьте компонент ReduxCounter сюда */}
      {/* <ReduxCounter /> */}
      {/* Конец места для использования ReduxCounter */}
    </div>
  );
};

export default HomePage;
```
