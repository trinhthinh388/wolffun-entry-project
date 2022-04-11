import React from 'react';
import { HeroInfo } from '../../../api/hero.api';

// Components
import { HeroCard } from '../../../components';

export type HeroListProps = Record<string, any>;

const MOCK_DATA: HeroInfo = {
  id: '2a9cdd43-5061-15b1-0bc6-0a1bc3ab7bdb',
  gTHCBattle: 225,
  usedBattle: 115,
  thcPrice: 443,
  usdPrice: 1601,
  hero: {
    imageURL: 'https://assets.thetanarena.com/skin/avatar/24000.png',
    title: 'The baby',
    name: 'Culien',
    rarity: 'epic',
  },
};

const HeroList: React.FC<
  HeroListProps & React.HTMLAttributes<HTMLDivElement>
> = ({ ...props }) => {
  return (
    <div className="grid px-[3rem]" {...props}>
      <HeroCard data={MOCK_DATA} />
    </div>
  );
};

export default HeroList;
