import { map } from 'lodash';

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

const HERO_BRIEF = [
  {
    rarity: 'common',
    imageURL: 'https://assets.thetanarena.com/skin/avatar/1002.png',
    title: 'lunar new year',
    name: 'serp',
  },
  {
    rarity: 'epic',
    imageURL: 'https://assets.thetanarena.com/skin/avatar/3001.png',
    title: 'lunar new year',
    name: 'morrod',
  },
  {
    rarity: 'legendary',
    imageURL: 'https://assets.thetanarena.com/skin/avatar/13002.png',
    title: 'ygg Phoenix',
    name: 'Phoenix',
  },
];

function guidGenerator() {
  const s4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHeroData(
  length: number,
  price: string | null,
  rarity: Array<'common' | 'epic' | 'legendary'> | null
): Promise<Array<HeroInfo>> {
  return new Promise(resolve => {
    let data = map(
      new Array(length),
      () =>
        ({
          id: guidGenerator(),
          gTHCBattle: 256,
          usedBattle: randomInteger(0, 100),
          thcPrice: randomInteger(0, 9999),
          usdPrice: randomInteger(0, 9999),
          hero: HERO_BRIEF[randomInteger(0, 2)],
        } as HeroInfo)
    );

    if (rarity && rarity.length) {
      data = data.filter(hero => rarity.includes(hero.hero.rarity));
    }

    if (price) {
      data = data.sort((a, b) => {
        if (price === 'asc') {
          return a.thcPrice - b.thcPrice;
        }
        return b.thcPrice - a.thcPrice;
      });
    }
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export type HeroListQuery = {
  perPage: number;
  price?: 'asc' | 'desc' | null;
  rarity?: Array<'common' | 'epic' | 'legendary'> | null;
};
export const fetchHeroList: (
  query: HeroListQuery
) => Promise<Array<HeroInfo>> = ({
  perPage = 50,
  price = 'asc',
  rarity = null,
}) => generateHeroData(perPage, price, rarity);
