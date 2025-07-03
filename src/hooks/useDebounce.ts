import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setState(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return state;
}
