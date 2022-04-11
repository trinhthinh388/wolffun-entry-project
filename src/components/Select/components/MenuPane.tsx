import React from 'react';
import { animated, useSpring } from 'react-spring';
import { createPortal } from 'react-dom';

export type MenuPane = {
  show?: boolean;
};

const MenuPane: React.FC<MenuPane & React.HTMLAttributes<HTMLDivElement>> = ({
  show,
  style,
  ...props
}) => {
  const paneAnim = useSpring({
    y: show ? 0 : 1,
  });

  const transform = paneAnim.y
    .to({
      range: [0, 1],
      output: [1, 0],
    })
    .to(y => `scaleY(${y})`);
  const opacity = paneAnim.y.to({
    range: [0, 1],
    output: [1, 0],
  });
  return createPortal(
    <animated.div
      style={{
        transform,
        opacity,
        pointerEvents: show ? 'all' : 'none',
        ...style,
      }}
      {...props}
    />,
    document.getElementById('popper__container') ??
      document.createElement('div')
  );
};

export default MenuPane;
