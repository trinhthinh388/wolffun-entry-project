import React from 'react';
import { useBreakpoint } from '../../../hooks';

// Components
import DesktopFilterPane from './DesktopFilterPane';

export type HeroesTabProps = Record<string, any>;

const HeroesTab: React.FC<HeroesTabProps> = () => {
  const currBp = useBreakpoint();
  return <div>{currBp === 'desktop' && <DesktopFilterPane />}</div>;
};

export default HeroesTab;
