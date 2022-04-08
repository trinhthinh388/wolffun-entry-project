import React, { useState } from 'react';

// Components
import Tabs from '../../Tabs';
// import TabContent from '../../Tabs/components/TabContent';
import Tab from '../../Tabs/components/TabItem';
import Button from '../../Button';

export type DesktopMenuProps = Record<string, unknown>;

const DesktopMenu: React.FC<DesktopMenuProps> = () => {
  const [activeTab] = useState<number>(1);
  return (
    <>
      <Tabs className="flex-grow ml-[-1rem]" activeTab={activeTab}>
        <Tab index={0}>Thetan Box</Tab>
        <Tab index={1}>Buy</Tab>
        <Tab index={2}>Rent</Tab>
        <Tab index={3}>Conversion Program</Tab>
        <Tab index={4}>Staking</Tab>
        <Tab index={5}>Contact Us</Tab>
      </Tabs>
      <Button className="mr-[2.5rem]">
        <span>Connect Wallet</span>
      </Button>
    </>
  );
};

export default DesktopMenu;
