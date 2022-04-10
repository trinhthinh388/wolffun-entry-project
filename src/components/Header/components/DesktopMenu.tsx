import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { find } from 'lodash';

// Components
import Tabs from '../../Tabs';

import Tab from '../../Tabs/components/TabItem';
import Button from '../../Button';

const MENU = [
  {
    id: 1,
    title: 'Thetan Box',
    href: '/thentan-box',
  },
  {
    id: 2,
    title: 'Buy',
    href: '/buy',
  },
  {
    id: 3,
    title: 'Rent',
    href: '/rent',
  },
  {
    id: 4,
    title: 'Conversion',
    href: '/conversion',
  },
  {
    id: 5,
    title: 'Staking',
    href: '/staking',
  },
  {
    id: 6,
    title: 'Contact Us',
    href: '/contact-us',
  },
];

export type DesktopMenuProps = Record<string, unknown>;

const DesktopMenu: React.FC<DesktopMenuProps> = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState<number>(2);
  const onTabChange = (idx: number | string) =>
    setActiveTab(parseInt(idx.toString(), 10));

  useEffect(() => {
    const currentTab = find(MENU, { href: pathname });
    setActiveTab(currentTab?.id ?? 1);
  }, [pathname]);

  return (
    <>
      <Tabs
        onTabChange={onTabChange}
        className="flex-grow ml-[-1rem]"
        activeTab={activeTab}
      >
        {MENU.map(item => (
          <Tab key={item.id} index={item.id} href={item.href}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <Button className="mr-[2.5rem]">
        <span>Connect Wallet</span>
      </Button>
    </>
  );
};

export default DesktopMenu;
