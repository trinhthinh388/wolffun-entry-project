export type HeroInfo = {
  id: string;
  gTHCBattle: number;
  usedBattle: number;
  thcPrice: number;
  usdPrice: number;
  hero: {
    rarity: 'common' | 'epic' | 'legendary';
    imageURL: string;
    title: string;
    name: string;
  };
};
