import React from 'react';
import { mergeClassname } from '../../../utils';

// Components
import { Expansion, Button } from '../../../components';

// Styles
import styles from '../styles/filter.module.scss';

export type DesktopFilterProps = Record<string, any>;

const DesktopFilterPane: React.FC<
  DesktopFilterProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => {
  return (
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
            <div>No hero selected</div>
            <Button className={styles['filter__btn']}>Choose Hero</Button>
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
            <div>No heroes selected</div>
            <Button className={styles['filter__btn']}>Choose Hero</Button>
          </div>
        </Expansion>
      </div>
    </div>
  );
};

export default DesktopFilterPane;
