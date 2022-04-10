import { useRef, useEffect } from 'react';

/**
 * usePrevious is a custom hooks which returns the previous value of the provided state.
 * @param value
 * @returns
 */
export default function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}
