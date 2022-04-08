import React, { useMemo, Children, cloneElement } from 'react';
import { mergeClassname } from '../../utils';

// Components
import TabContent from './components/TabContent';
import TabItem, { TabItemProps } from './components/TabItem';

// Styles
import styles from './styles/tabs.module.scss';

export type TabsProps = {
  activeTab?: string | number;
};

const Tabs: React.FC<TabsProps & React.HTMLAttributes<HTMLDivElement>> = ({
  activeTab,
  className = '',
  children,
  ...props
}) => {
  // Group TabItem and TabContent into an HashMap.
  const TabsChilren = useMemo(() => {
    return Children.toArray(children).reduce(
      (
        obj: {
          items: Array<React.ReactElement>;
          contents: Array<React.ReactElement>;
        },
        child
      ) => {
        if ((child as React.ReactElement).type === TabItem) {
          obj.items.push(
            cloneElement(child as React.ReactElement, {
              isActive:
                (child as React.ReactElement<TabItemProps>).props.index ===
                activeTab,
            })
          );
        }
        if ((child as React.ReactElement).type === TabContent) {
          obj.contents.push(child as React.ReactElement);
        }
        return obj;
      },
      {
        items: [],
        contents: [],
      }
    );
  }, [children]);

  return (
    <div className={mergeClassname(styles.tabs, className)} {...props}>
      {TabsChilren.items}
      {TabsChilren.contents}
    </div>
  );
};

export default Tabs;
