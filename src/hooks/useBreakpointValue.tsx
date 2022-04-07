import { useContext } from 'react';
import { isNil, keys } from 'lodash';
import { SizeContext, Breakpoint } from '../contexts';

const BP_WEIGHT: Record<Breakpoint | string, number> = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

/**
 * useBreakpointValue is a custom hook which returns the value for the current
 * breakpoint from the provided responsive values object.
 * @param obj
 * @returns {unknown} returns current breakpoint's value.
 */
export default function useBreakpointValue<T>(
  obj: Partial<Record<Breakpoint, T>>
): T | null {
  const sortedKey = keys(obj).sort((a, b) => BP_WEIGHT[a] - BP_WEIGHT[b]);
  const currentBp = useContext(SizeContext).currentBreakpoint;
  if (isNil(currentBp)) {
    return null;
  }

  if (!obj[currentBp]) {
    return obj[sortedKey[0] as Breakpoint] ?? null;
  }

  return obj[currentBp] ?? null;
}
