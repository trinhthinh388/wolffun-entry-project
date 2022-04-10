import React, { useState } from 'react';

// Images
import HeroIcon from '../../../public/svg/hero_rarity.svg';
import CosmeticIcon from '../../../public/svg/ic_marketplace_cosmetic.svg';

// Components
import { Tabs, TabItem as Tab } from '../../components';

// Styles
import styles from './styles/marketplace.module.scss';

const MENU = [
  {
    id: 'heroes',
    title: 'Heroes',
    href: '/buy#heroes',
    icon: <HeroIcon />,
  },
  {
    id: 'cosmetics',
    title: 'Cosmetics',
    href: '/buy#cosmetics',
    icon: <CosmeticIcon />,
  },
];

export type MarketPlaceProps = Record<string, any>;

const MarketPlace: React.FC<MarketPlaceProps> = () => {
  const [activeTab, setActive] = useState<string>('heroes');

  const onTabChange = (id: string | number) => setActive(id.toString());

  return (
    <div className={styles.marketplace}>
      <Tabs
        className={styles['marketplace__tabs']}
        onTabChange={onTabChange}
        activeTab={activeTab}
        indicatorProps={{
          className: styles['tabs__indicator'],
        }}
      >
        {MENU.map(item => (
          <Tab key={item.id} index={item.id} href={item.href}>
            <div className={styles['tabs__content']}>
              <span className={styles['content__icon']}>{item.icon}</span>
              {item.title}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default MarketPlace;
