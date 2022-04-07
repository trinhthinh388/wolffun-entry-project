import React, { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'lodash';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export type TSizeContext = {
  currentBreakpoint: Breakpoint | null;
};

const BREAKPOINT_VALUE: Record<Breakpoint, number> = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
};

export const SizeContext = React.createContext<TSizeContext>({
  currentBreakpoint: null,
});

const SizeProvider: React.FC<any> = ({ children }) => {
  const [currBp, setBp] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const observer = new ResizeObserver(
      debounce(entries => {
        for (const entry of entries) {
          const { width } = entry.contentRect;
          if (width <= BREAKPOINT_VALUE.mobile) {
            setBp('mobile');
          } else if (
            width > BREAKPOINT_VALUE.mobile &&
            width < BREAKPOINT_VALUE.tablet
          ) {
            setBp('tablet');
          } else {
            setBp('desktop');
          }
        }
      }, 50)
    );
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SizeContext.Provider value={{ currentBreakpoint: currBp }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeProvider;
