import React from 'react';

export type TabContentProps = {
  index?: number | string;
};

const TabContent: React.FC<
  TabContentProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default TabContent;
