import { useEffect, useRef, useCallback } from "react";
type ThrottledFunction<T extends (...args: Parameters<T>) => void> = (
  ...args: Parameters<T>
) => void;

export function useThrottle<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number,
): ThrottledFunction<T> {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttleFn = useCallback(
    (...args: Parameters<T>) => {
      if (!timeoutRef.current) {
        fn(...args);

        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
        }, delay);
      }
    },
    [fn, delay],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [fn, delay]);

  return throttleFn;
}
