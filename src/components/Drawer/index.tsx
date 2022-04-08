import React, { CSSProperties, Children, cloneElement, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
import { mergeClassname } from '../../utils';

// Components
import DrawerContent from './components/DrawerContent';

// Styles
import styles from './styles/drawer.module.scss';

export type DrawerProps = {
  open?: boolean;
  backdropStyles?: CSSProperties;
};

const Drawer: React.FC<DrawerProps & React.HTMLAttributes<HTMLDivElement>> = ({
  open = false,
  className = '',
  backdropStyles = {},
  children,
  ...props
}) => {
  const animatedBackdrop = useSpring({ opacity: open ? 1 : 0 });

  const Content = useMemo(
    () =>
      Children.map(children, child => {
        if ((child as React.ReactElement).type === DrawerContent) {
          return cloneElement(child as React.ReactElement, {
            open,
          });
        }
        return child;
      }),
    [children, open]
  );

  return (
    <animated.div
      style={{
        ...backdropStyles,
        ...animatedBackdrop,
      }}
      className={styles['drawer__backdrop']}
    >
      <div
        className={mergeClassname(
          styles.drawer,
          className,
          open && styles['drawer--open']
        )}
        {...props}
      >
        {Content}
      </div>
    </animated.div>
  );
};

export default Drawer;
