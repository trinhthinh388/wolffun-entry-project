import React from 'react';
import { Link } from 'react-router-dom';
import { mergeClassname } from '../../../../utils';

// Styles
import styles from '../../styles/item.module.scss';

export type TabItemProps = {
  index?: number | string;
  isActive?: boolean;
};

const TabItem: React.FC<
  TabItemProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ className, children, isActive = false }) => {
  return (
    <Link
      className={mergeClassname(
        styles['tabs__item'],
        isActive && styles['tabs__item--active'],
        className
      )}
      to="/"
    >
      <span className={styles['item__content']}>{children}</span>
    </Link>
  );
};

export default TabItem;
