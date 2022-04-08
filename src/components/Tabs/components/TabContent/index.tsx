import React from 'react';
import { Link } from 'react-router-dom';

export type TabContentProps = {
  index?: number | string;
};

const TabContent: React.FC<
  TabContentProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ index }) => {
  return <Link to="/" key={index}></Link>;
};

export default TabContent;
