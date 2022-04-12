import React, { useEffect } from 'react';
import { useBreakpointValue } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { HeroInfo } from '../../../api/hero.api';
import { addHeroes, resetHeroes } from '../../../redux/actions';

// Components
import { HeroCard } from '../../../components';
import { RootState } from '../../../redux/store';
import { mergeClassname } from '../../../utils';

// Styles
import styles from '../styles/marketplace.module.scss';

export type HeroListProps = Record<string, any>;

const HeroList: React.FC<
  HeroListProps & React.HTMLAttributes<HTMLDivElement>
> = ({ ...props }) => {
  const gridCols = useBreakpointValue({
    mobile: 'grid-cols-2',
    tablet: 'grid-cols-3',
    desktop: 'px-[3rem] grid-cols-4',
  });
  const dispatch = useDispatch();

  const heroList = useSelector<RootState, Array<HeroInfo>>(
    state => state.heroState.list ?? []
  );
  const isFetching = useSelector<RootState, boolean>(
    state => state.heroState.fetchState.list
  );

  useEffect(() => {
    dispatch(addHeroes({ perPage: 50 }, true));
    return () => {
      dispatch(resetHeroes());
    };
  }, [dispatch]);

  if (isFetching) {
    return (
      <div className={styles['loading__indicator']}>
        <img src="/gif/ic_processing.gif" />
      </div>
    );
  }

  return (
    <div
      className={mergeClassname(
        'grid mx-auto grid-flow-row gap-[2rem]',
        gridCols || ''
      )}
      {...props}
    >
      {heroList.map(hero => (
        <HeroCard key={hero.id} data={hero} />
      ))}
    </div>
  );
};

export default HeroList;
