import React, { useState } from 'react';

import Button from '../../Button';
import Drawer from '../../Drawer';
import DrawerContent from '../../Drawer/components/DrawerContent';

// Images
import BurgerMenu from '../../../../public/svg/ic_three.svg';

export type MobileMenuProps = Record<string, unknown>;

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [show, setShow] = useState<boolean>(false);

  const onMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShow(prev => !prev);
  };

  return (
    <>
      <div className="flex flex-grow justify-end">
        <Button>
          <span>Connect Wallet</span>
        </Button>
      </div>
      <Button onClick={onMenuClick} icon={<BurgerMenu />} />
      <Drawer open={show}>
        <DrawerContent>THINHMEO</DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
