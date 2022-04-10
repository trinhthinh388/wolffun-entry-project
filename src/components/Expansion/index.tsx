import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { usePrevious } from '../../hooks';
import { mergeClassname } from '../../utils';

// Images
import Arrow from '../../../public/svg/ic_arrow_down_fill.svg';

// Styles
import styles from './styles/expansion.module.scss';

export type ExpansionProps = {
  title?: string;
};

const Expansion: React.FC<
  ExpansionProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, children, className, ...props }) => {
  const [childrenRef, { height: viewHeight }] = useMeasure();
  const [open, setOpen] = useState<boolean>(true);
  const previous = usePrevious(open);

  const expansionAnim = useSpring({ x: open ? 1 : 0 });
  const arrowTransformation = expansionAnim.x
    .to({
      range: [0, 1],
      output: [0, 180],
    })
    .to(x => `rotate(${x}deg)`);

  const childrenAnim = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: open ? viewHeight : 0,
      opacity: open ? 1 : 0,
      y: open ? 0 : 20,
    },
  });

  return (
    <div className={mergeClassname(styles.expansion, className)} {...props}>
      <div
        onClick={() => setOpen(prev => !prev)}
        className={styles['expansion__header']}
      >
        <div className={styles['header__title']}>{title}</div>
        <animated.div
          style={{ transform: arrowTransformation }}
          className={styles['header__icon']}
        >
          <Arrow />
        </animated.div>
      </div>
      <animated.div
        style={{
          opacity: childrenAnim.opacity,
          height: open && previous === open ? 'auto' : childrenAnim.height,
        }}
        className={mergeClassname(styles['expansion__content'])}
      >
        <animated.div style={{ y: childrenAnim.y }} ref={childrenRef}>
          {children}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Expansion;
