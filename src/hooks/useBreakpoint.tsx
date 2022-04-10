import { useContext } from 'react';
import { SizeContext, Breakpoint } from '../contexts';

/**
 * useBreakpointValue is a custom hook which returns the current breakpoint value.
 * @param obj
 * @returns {unknown} returns current breakpoint's value.
 */
export default function useBreakpoint(): Breakpoint | null {
  const currentBp = useContext(SizeContext).currentBreakpoint;
  return currentBp;
}
