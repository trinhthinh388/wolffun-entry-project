import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { mergeClassname } from '../../../../utils';

// Styles
import styles from '../../styles/item.module.scss';

export type TabItemProps = {
  index?: number | string;
  href?: string;
  isActive?: boolean;
};

const TabItem = forwardRef<
  HTMLAnchorElement,
  TabItemProps & React.HTMLAttributes<HTMLAnchorElement>
>(({ className, children, isActive = false, href = '/', ...props }, ref) => (
  <Link
    ref={ref}
    className={mergeClassname(
      styles['tabs__item'],
      isActive && styles['tabs__item--active'],
      className
    )}
    to={href}
    {...props}
  >
    <span className={styles['item__content']}>{children}</span>
  </Link>
));

if (process.env.NODE_ENV !== 'production') {
  TabItem.displayName = 'TabItem';
}

export default TabItem;
