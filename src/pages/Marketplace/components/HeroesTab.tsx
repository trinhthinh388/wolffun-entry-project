import React from 'react';
import { useBreakpointValue } from '../../../hooks';

// Components
import DesktopFilterPane from './DesktopFilterPane';
import MobileFilterPane from './MobileFilterPane';

export type HeroesTabProps = Record<string, any>;

const HeroesTab: React.FC<HeroesTabProps> = () => {
  const FilterSection = useBreakpointValue({
    tablet: <MobileFilterPane />,
    desktop: <DesktopFilterPane />,
  });
  return <div>{FilterSection}</div>;
};

export default HeroesTab;
