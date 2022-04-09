import React, { useState } from 'react';

// Components
import Tabs from '../../Tabs';
// import TabContent from '../../Tabs/components/TabContent';
import Tab from '../../Tabs/components/TabItem';
import Button from '../../Button';

export type DesktopMenuProps = Record<string, unknown>;

const DesktopMenu: React.FC<DesktopMenuProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(2);
  const onTabChange = (idx: number | string) =>
    setActiveTab(parseInt(idx.toString(), 10));
  return (
    <>
      <Tabs
        onTabChange={onTabChange}
        className="flex-grow ml-[-1rem]"
        activeTab={activeTab}
      >
        <Tab index={1} href="/thetan-box">
          Thetan Box
        </Tab>
        <Tab index={2} href="/buy">
          Buy
        </Tab>
        <Tab index={3} href="/rent">
          Rent
        </Tab>
        <Tab index={4} href="/conversion">
          Conversion Program
        </Tab>
        <Tab index={5} href="/staking">
          Staking
        </Tab>
        <Tab index={6} href="/contact-us">
          Contact Us
        </Tab>
      </Tabs>
      <Button className="mr-[2.5rem]">
        <span>Connect Wallet</span>
      </Button>
    </>
  );
};

export default DesktopMenu;
