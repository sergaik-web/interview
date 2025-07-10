import { useCallback } from "react";

export function useCloneObj<T>(data: T): T | undefined {
  const cb = useCallback(
    <O>(obj: O): O | undefined => {
      const recFn = <V>(value: V): V | undefined => {
        if (value === null || typeof value !== "object") {
          return value;
        }

        if (Array.isArray(value)) {
          return value.map((e) => recFn(e)) as V;
        }

        const result: Record<string, unknown> = {};
        for (const key in value) {
          result[key] = recFn(value[key]);
        }

        return result as V;
      };

      return recFn(obj);
    },
    [data],
  );

  return cb(data);
}
