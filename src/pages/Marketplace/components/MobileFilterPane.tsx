import React from 'react';

// Components
import { Button, Select } from '../../../components';

const SORTING_OPTIONS = [
  { id: 1, title: 'Cheapest Price per Remaining gTHC battles' },
  { id: 2, title: 'Latest' },
  { id: 3, title: 'Cheapest Item' },
  { id: 4, title: 'Most Expensive' },
];

export type MobileFilterProps = Record<string, any>;

const MobileFilterPane: React.FC<
  MobileFilterProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 flex justify-center flex-row my-[23.5px]">
        <Select
          defaultValue={'Cheapest Price per Remaining gTHC battles'}
          options={SORTING_OPTIONS}
        />
        <Button className="h-[2.5rem] ml-[0.5rem] bg-[#2b157b]">Filter</Button>
      </div>
      {children}
    </div>
  );
};

export default MobileFilterPane;
