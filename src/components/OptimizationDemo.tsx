import React, { useCallback, useMemo, useState } from "react";
import { usePrevious } from "../hooks/usePrevious";
import { useDebounce } from "../hooks/useDebounce";

const ChildComponent = ({ count, onCountChange }: { count: number; onCountChange: () => void }) => {
  console.log("Child Component");
  const prev = usePrevious(count);
  return (
    <div>
      <p style={{ color: "red" }}>{count}</p>
      <p style={{ color: "green" }}>{prev}</p>
      <div>
        <button onClick={onCountChange}>Увеличить</button>
      </div>
    </div>
  );
};

const MemoizedChildComponent = React.memo(
  ({ count, onCountChange }: { count: number; onCountChange: () => void }) => {
    console.log("MemoizedChildComponent");
    return (
      <div>
        <p style={{ color: "red" }}>{count}</p>
        <div>
          <button onClick={onCountChange}>Увеличить</button>
        </div>
      </div>
    );
  },
);

MemoizedChildComponent.displayName = "MemoizedChildComponent";

const OptimizationDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const debouncedValue = useDebounce(text, 2000);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [setCount, count]);

  const inputText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target?.value);
    },
    [setText],
  );

  const countText = useMemo(() => {
    return count + text;
  }, [count, text]);

  return (
    <div>
      <ChildComponent count={count} onCountChange={increment} />

      <p style={{ color: "green" }}>{debouncedValue}</p>
      <div>
        <input onChange={inputText} />
      </div>

      <MemoizedChildComponent count={count} onCountChange={increment} />

      <p>{countText}</p>
    </div>
  );
};

export default OptimizationDemo;
