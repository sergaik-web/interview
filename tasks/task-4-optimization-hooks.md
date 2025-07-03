# Задача 4: Оптимизация рендеринга и кастомные хуки

## Цель:
Понять и применить на практике методы оптимизации рендеринга в React с использованием `React.memo`, `useMemo`, `useCallback`, а также продемонстрировать использование кастомных хуков `usePrevious` и `useDebounce`.

## Теоретическая часть:
Оптимизация рендеринга в React является ключевым аспектом производительности приложения. React перерисовывает компоненты, когда их состояние или пропсы изменяются. Однако, иногда происходят избыточные перерисовки, которые не приводят к видимым изменениям в UI, но потребляют ресурсы.

- **`React.memo`**: Это HOC (Higher-Order Component), который используется для мемоизации функциональных компонентов. Он предотвращает перерисовку компонента, если его пропсы не изменились. По умолчанию `React.memo` выполняет поверхностное сравнение пропсов.
- **`useMemo`**: Хук, который мемоизирует значение. Он возвращает мемоизированное значение, которое пересчитывается только тогда, когда одна из зависимостей в массиве зависимостей изменяется. Полезен для дорогостоящих вычислений.
- **`useCallback`**: Хук, который мемоизирует функцию-колбэк. Он возвращает мемоизированную версию колбэка, которая изменяется только тогда, когда одна из зависимостей в массиве зависимостей изменяется. Это предотвращает ненужные перерисовки дочерних компонентов, которым передаются эти колбэки в качестве пропсов.

Кастомные хуки, такие как `usePrevious` и `useDebounce`, позволяют инкапсулировать переиспользуемую логику состояния и поведения, делая код более чистым и модульным.

## Задание:

1.  **Создайте новый компонент `src/components/OptimizationDemo.tsx`**.
    Этот компонент будет демонстрировать проблему избыточного рендеринга.

2.  **Реализуйте в `OptimizationDemo.tsx`:**
    *   Состояние `count` (число) и `text` (строка).
    *   Кнопку для увеличения `count`.
    *   Поле ввода для изменения `text`.
    *   Дочерний компонент `ChildComponent`, который принимает `count` и `onCountChange` (функцию) в качестве пропсов.
    *   Дочерний компонент `MemoizedChildComponent`, который будет мемоизирован с помощью `React.memo` и также будет принимать `count` и `onCountChange`.

3.  **Продемонстрируйте избыточный рендеринг:**
    *   В `ChildComponent` и `MemoizedChildComponent` добавьте `console.log('ChildComponent rendered')` и `console.log('MemoizedChildComponent rendered')` соответственно, чтобы отслеживать их перерисовки.
    *   Изначально `ChildComponent` не должен быть мемоизирован.

4.  **Примените оптимизацию:**
    *   Оберните `MemoizedChildComponent` в `React.memo`.
    *   Используйте `useCallback` для мемоизации функции `onCountChange`, передаваемой в `MemoizedChildComponent`.
    *   Используйте `useMemo` для мемоизации какого-либо значения, которое вычисляется на основе `count` или `text` (например, отформатированная строка или объект конфигурации), и передайте его в один из дочерних компонентов.

5.  **Интегрируйте кастомные хуки:**
    *   Используйте хук `usePrevious` в `OptimizationDemo.tsx` для отслеживания предыдущего значения `count` или `text` и выведите его в консоль или на экран.
    *   Используйте хук `useDebounce` для значения `text` из поля ввода. Выведите дебаунснутое значение в консоль, чтобы увидеть задержку.

6.  **Используйте `OptimizationDemo` в `pages/index.tsx`**:
    Импортируйте и отобразите компонент `OptimizationDemo` на главной странице.

## Места для реализации кода:

### `src/components/OptimizationDemo.tsx` (создать файл)

```typescript
import React, { useState, useCallback, useMemo } from 'react';
import { usePrevious } from '../hooks/usePrevious'; // Импортируйте usePrevious
import { useDebounce } from '../hooks/useDebounce'; // Импортируйте useDebounce

// Дочерний компонент, который будет демонстрировать избыточный рендеринг
const ChildComponent = ({ count, onCountChange }: { count: number; onCountChange: () => void }) => {
  console.log('ChildComponent rendered');
  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h3>Child Component</h3>
      <p>Count from parent: {count}</p>
      <button onClick={onCountChange}>Increment Count (from Child)</button>
    </div>
  );
};

// Дочерний компонент, который будет мемоизирован
const MemoizedChildComponent = React.memo(({ count, onCountChange }: { count: number; onCountChange: () => void }) => {
  console.log('MemoizedChildComponent rendered');
  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h3>Memoized Child Component (React.memo)</h3>
      <p>Count from parent: {count}</p>
      <button onClick={onCountChange}>Increment Count (from Memoized Child)</button>
    </div>
  );
});

const OptimizationDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // --- Место для использования usePrevious ---
  // TODO: Используйте usePrevious для отслеживания предыдущего значения count или text.
  // Пример: const prevCount = usePrevious(count);
  // Выведите его в консоль или на экран.
  // --- Конец места для usePrevious ---

  // --- Место для использования useDebounce ---
  // TODO: Используйте useDebounce для значения text.
  // Пример: const debouncedText = useDebounce(text, 500); // 500ms задержка
  // Выведите debouncedText в консоль, чтобы увидеть эффект задержки.
  // --- Конец места для useDebounce ---

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // --- Место для использования useCallback ---
  // TODO: Мемоизируйте функцию handleIncrement для передачи в MemoizedChildComponent.
  // Пример: const memoizedHandleIncrement = useCallback(() => { ... }, [dependencies]);
  // --- Конец места для useCallback ---

  // --- Место для использования useMemo ---
  // TODO: Мемоизируйте какое-либо значение, вычисляемое на основе count или text.
  // Пример: const computedValue = useMemo(() => { return someExpensiveCalculation(count); }, [count]);
  // Передайте это значение в один из дочерних компонентов или выведите на экран.
  // --- Конец места для useMemo ---

  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h2>Optimization Demo</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>

      <p>
        Text Input: <input type="text" value={text} onChange={handleTextChange} />
      </p>
      {/* TODO: Выведите здесь предыдущее значение (из usePrevious) и дебаунснутое значение (из useDebounce) */}

      <ChildComponent count={count} onCountChange={handleIncrement} />
      {/* TODO: Передайте мемоизированную функцию в MemoizedChildComponent */}
      <MemoizedChildComponent count={count} onCountChange={handleIncrement} />
    </div>
  );
};

export default OptimizationDemo;
```

### `pages/index.tsx`

```typescript
// ... (существующий код)

import OptimizationDemo from '../src/components/OptimizationDemo'; // Импортируйте новый компонент

const Home: React.FC = () => {
  return (
    <div>
      {/* ... (существующий код) */}

      {/* Место для использования OptimizationDemo */}
      {/* TODO: Добавьте компонент OptimizationDemo сюда */}
      {/* <OptimizationDemo /> */}
      {/* Конец места для использования OptimizationDemo */}
    </div>
  );
};

export default Home;
```
