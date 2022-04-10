import React, {
  useMemo,
  Children,
  cloneElement,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { isNil } from 'lodash';
import { useSpring, animated } from 'react-spring';
import { mergeClassname } from '../../utils';

// Components
import TabContent from './components/TabContent';
import TabItem, { TabItemProps } from './components/TabItem';

// Styles
import styles from './styles/tabs.module.scss';

export type TabsProps = {
  activeTab?: string | number;
  indicatorProps?: React.HTMLAttributes<HTMLDivElement>;
  onTabChange?: (
    idx: number | string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => any;
};

const Tabs: React.FC<TabsProps & React.HTMLAttributes<HTMLDivElement>> = ({
  activeTab,
  className = '',
  indicatorProps: { className: indicatorClass, ...otherIndicatorProps } = {},
  children,
  onTabChange = () => {},
  ...props
}) => {
  const navigation = useNavigate();
  const tabRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const [indicatorAnim, animAPI] = useSpring(
    {
      width: 0,
      left: 0,
    },
    []
  );

  const onTabClick = useCallback(
    (idx: number | string, href: string) => () => {
      if (!inputRef.current) return;
      const changeEvent = new Event('change');
      inputRef.current.value = (idx ?? '').toString();
      inputRef.current.dispatchEvent(changeEvent);
      navigation(href);
    },
    [navigation]
  );

  const onInputChange = useCallback(
    (event: Event) => {
      const e = event as unknown as React.ChangeEvent<HTMLInputElement>;
      e.preventDefault();
      const { value } = e.currentTarget;
      onTabChange(value, e);
    },
    [onTabChange]
  );

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
          const { index, href } = (child as React.ReactElement<TabItemProps>)
            .props;
          obj.items.push(
            cloneElement(child as React.ReactElement, {
              isActive: index === activeTab,
              onClick: onTabClick(index ?? '', href ?? ''),
              href,
              ref: (r: any) => {
                itemRefs.current[index ?? ''] = r;
              },
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
  }, [activeTab, children, onTabClick]);

  useEffect(() => {
    if (isNil(activeTab) || isNil(tabRef.current)) return;
    const { x: tabX } = tabRef.current.getBoundingClientRect();
    const { width, x } = itemRefs.current[
      activeTab
    ]?.getBoundingClientRect() ?? { width: 0, x: 0 };

    if (indicatorAnim.width.get() === 0) {
      animAPI.set({ width, left: x - tabX });
      return;
    }
    animAPI.start({ width, left: x - tabX });
  }, [activeTab, animAPI, indicatorAnim.width]);

  useEffect(() => {
    if (!inputRef.current) return;
    const inputEl = inputRef.current;
    inputEl.addEventListener('change', onInputChange);
    // eslint-disable-next-line consistent-return
    return () => {
      inputEl.removeEventListener('change', onInputChange);
    };
  }, [onInputChange]);

  return (
    <div
      ref={tabRef}
      className={mergeClassname(styles.tabs, className)}
      {...props}
    >
      <input ref={inputRef} className="hidden" />
      <animated.div
        style={indicatorAnim}
        className={mergeClassname(styles['tabs__indicator'], indicatorClass)}
        {...otherIndicatorProps}
      />
      {TabsChilren.items}
      {TabsChilren.contents}
    </div>
  );
};

export default Tabs;
