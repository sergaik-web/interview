import React, { useState } from "react";
import { usePrevious } from "../src/hooks/usePrevious";
import { useDebounce } from "../src/hooks/useDebounce";

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("");

  const prevCount = usePrevious(count);
  const debouncedValue = useDebounce(string, 2000);

  return (
    <div>
      <h1>Счетчик</h1>
      <p>Текущее значение: {count}</p>
      <p>Предыдущее значение: {prevCount !== undefined ? prevCount : "Нет предыдущего значения"}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      <div>
        <input
          value={string}
          onChange={(e) => setString(e.target.value)}
          placeholder="Введите текст"
        />
        <div>Мгновенное значение: {string}</div>
        <div>Debounce-значение: {debouncedValue}</div>
      </div>
    </div>
  );
};

export default HomePage;
