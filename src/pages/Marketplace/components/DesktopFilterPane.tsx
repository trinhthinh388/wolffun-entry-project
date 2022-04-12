import React, { useState } from 'react';
import { mergeClassname } from '../../../utils';
import { useDispatch } from 'react-redux';
import { addHeroes } from '../../../redux/actions';
import { compact, map } from 'lodash';

// Components
import { Expansion, Button, Checkbox, Select } from '../../../components';

// Styles
import styles from '../styles/filter.module.scss';

const SORTING_OPTIONS = [
  { id: 1, title: 'Cheapest Price per Remaining gTHC battles' },
  { id: 2, title: 'Latest' },
  { id: 'price-asc', title: 'Cheapest Item' },
  { id: 'price-desc', title: 'Most Expensive' },
];

export type DesktopFilterProps = Record<string, any>;

const DesktopFilterPane: React.FC<
  DesktopFilterProps & React.HTMLAttributes<HTMLDivElement>
> = ({ options, className, children, ...props }) => {
  const dispatch = useDispatch();
  const [sortState, setSort] = useState<'asc' | 'desc' | null>(null);
  const [fState, setFilter] = useState<{
    rarity: {
      common: boolean;
      epic: boolean;
      legendary: boolean;
    };
  }>({
    rarity: {
      common: false,
      epic: false,
      legendary: false,
    },
  });

  const clear = () => {
    setFilter({
      rarity: {
        common: false,
        epic: false,
        legendary: false,
      },
    });
    dispatch(addHeroes({ perPage: 50, price: sortState }));
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilter(prev => {
      const newState = {
        ...prev,
        rarity: {
          ...prev.rarity,
          [name]: checked,
        },
      };

      const rarityFilter = compact(
        map(newState.rarity, (value, key) => {
          if (value) return key;
          return null;
        })
      );
      dispatch(
        addHeroes(
          {
            perPage: 50,
            rarity: rarityFilter as Array<'common' | 'epic' | 'legendary'>,
            price: sortState,
          },
          true
        )
      );

      return newState;
    });
  };
  const onSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const rarityFilter = compact(
      map(fState.rarity, (value, key) => {
        if (value) return key;
        return null;
      })
    ) as Array<'common' | 'epic' | 'legendary'>;
    switch (value) {
      case 'Cheapest Item': {
        setSort('asc');
        dispatch(
          addHeroes({ perPage: 50, rarity: rarityFilter, price: 'asc' })
        );
        break;
      }
      case 'Most Expensive': {
        setSort('desc');
        dispatch(
          addHeroes({ perPage: 50, rarity: rarityFilter, price: 'desc' })
        );
        break;
      }
      default: {
        setSort(null);
        dispatch(addHeroes({ perPage: 50, rarity: rarityFilter }));
      }
    }
  };

  return (
    <div className="flex">
      <div
        className={mergeClassname(styles.filter, 'h-fit', className)}
        {...props}
      >
        <div className={styles['filter__section']}>
          <div className={styles['filter__title']}>filter</div>
          <div onClick={clear} className={styles['filter__clear']}>
            Clear all
          </div>
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
              <Checkbox
                onChange={onCheckboxChange}
                name="common"
                checked={fState.rarity.common}
                title="Common"
              />
              <Checkbox
                onChange={onCheckboxChange}
                name="epic"
                checked={fState.rarity.epic}
                title="Epic"
              />
              <Checkbox
                onChange={onCheckboxChange}
                name="legendary"
                checked={fState.rarity.legendary}
                title="Legendary"
              />
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
          onChange={onSortChange}
        />
        {children}
      </div>
    </div>
  );
};

export default DesktopFilterPane;
