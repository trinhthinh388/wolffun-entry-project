import React, { HTMLAttributes } from 'react';
import { useSpring, animated } from 'react-spring';
import { mergeClassname } from '../../../../utils';
// Styles
import styles from '../styles/content.module.scss';

export type DrawerContentProps = {
  position?: 'top' | 'right' | 'bottom' | 'left';
  open?: boolean;
};

const DrawerContent: React.FC<
  DrawerContentProps & HTMLAttributes<HTMLDivElement>
> = ({ position = 'right', open = false, className, ...props }) => {
  const animation = useSpring({ x: open ? 1 : 0 });
  const transform = animation.x
    .to({
      range: [0, 1],
      output: [300, 0],
    })
    .to(x => `translateX(${x}px)`);
  const opacity = animation.x.to(x => x);

  return (
    <animated.div
      style={{ transform, opacity }}
      className={mergeClassname(
        styles['drawer__content'],
        `${styles[`drawer__content--${position}`]}`,
        className
      )}
      {...props}
    />
  );
};

export default DrawerContent;
