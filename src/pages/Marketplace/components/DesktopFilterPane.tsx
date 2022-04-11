import React from 'react';
import { mergeClassname } from '../../../utils';

// Components
import { Expansion, Button, Checkbox, Select } from '../../../components';

// Styles
import styles from '../styles/filter.module.scss';

const SORTING_OPTIONS = [
  { id: 1, title: 'Cheapest Price per Remaining gTHC battles' },
  { id: 2, title: 'Latest' },
  { id: 3, title: 'Cheapest Item' },
  { id: 4, title: 'Most Expensive' },
];

export type DesktopFilterProps = Record<string, any>;

const DesktopFilterPane: React.FC<
  DesktopFilterProps & React.HTMLAttributes<HTMLDivElement>
> = ({ options, className, children, ...props }) => {
  return (
    <div className="flex">
      <div className={mergeClassname(styles.filter, className)} {...props}>
        <div className={styles['filter__section']}>
          <div className={styles['filter__title']}>filter</div>
          <div className={styles['filter__clear']}>Clear all</div>
        </div>

        <div className={styles['filter__section']}>
          <Expansion title="Hero">
            <div className={styles['filter__content']}>
              <div className="h-[1rem]" />
              <div>No heroes selected</div>
              <Button className={styles['filter__btn']}>Choose Hero</Button>
            </div>
          </Expansion>
        </div>

        <div className={styles['filter__section']}>
          <Expansion title="Rarity">
            <div className={styles['filter__content']}>
              <div className="h-[1rem]" />
              <Checkbox title="Common" />
              <Checkbox title="Epic" />
              <Checkbox title="Legendary" />
            </div>
          </Expansion>
        </div>

        <div className={styles['filter__section']}>
          <Expansion title="Skin">
            <div className={styles['filter__content']}>
              <div className="h-[1rem]" />
              <div>No skin selected</div>
              <Button className={styles['filter__btn']}>Choose Skin</Button>
            </div>
          </Expansion>
        </div>

        <div className={styles['filter__section']}>
          <Expansion title="Skin Rarity">
            <div className={styles['filter__content']}>
              <div className="h-[1rem]" />
              <Checkbox title="Normal" />
              <Checkbox title="Rare" />
              <Checkbox title="Mythical" />
            </div>
          </Expansion>
        </div>
      </div>

      <div className="flex-1 flex flex-col my-[23.5px]">
        <Select
          defaultValue={'Cheapest Price per Remaining gTHC battles'}
          className="self-end"
          options={SORTING_OPTIONS}
        />
        {children}
      </div>
    </div>
  );
};

export default DesktopFilterPane;
