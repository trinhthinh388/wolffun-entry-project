import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import {} from '../../components';

// Images
import Arrow from '../../../public/svg/ic_arrow_down_fill.svg';

// Styles
import styles from './styles/hero.module.scss';
import { mergeClassname } from '../../utils';

const MOCK_DATA = {
  imageURL: 'https://assets.thetanarena.com/skin/full/24000.png',
  rarity: 'common',
  title: 'The baby',
  name: 'Culien',
  thcPrice: 40000,
  usdPrice: 451.5,
  id: '#99241644659599',
  owner: '0xc050a7...7af43b29',
};

const HeroDetail: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const navigation = useNavigate();
  return (
    <div className={styles['hero']}>
      <div
        onClick={() => navigation('/buy#heroes')}
        className={styles['hero__action']}
      >
        <Arrow />
        <span>Go Back</span>
      </div>

      <div className={styles['hero__tabs']}>
        <div className={styles['tabs__tab']}>
          Hero
          <span
            className={mergeClassname(
              styles['tab__border'],
              styles['tab__border--active']
            )}
          />
        </div>
        <div className={styles['tabs__tab']}>
          P2E Info
          <span className={styles['tab__border']} />
        </div>
        <div className={styles['tabs__tab']}>
          Stats
          <span className={styles['tab__border']} />
        </div>
        <div className={styles['tabs__tab']}>
          Fury
          <span className={styles['tab__border']} />
        </div>
        <div className={styles['tabs__tab']}>
          Passive
          <span className={styles['tab__border']} />
        </div>
      </div>

      <div className={styles['hero__image']}>
        <img src={MOCK_DATA.imageURL} />
        <img
          className={styles['image__bg']}
          src={`/png/bg_deco_hero_${MOCK_DATA.rarity}.png`}
        />
      </div>

      <div
        className={mergeClassname(
          styles['hero__info'],
          styles['hero__info--' + MOCK_DATA.rarity]
        )}
      >
        <div className={styles['hero__title']}>{MOCK_DATA.title}</div>
        <div className={styles['hero__name']}>{MOCK_DATA.name}</div>
      </div>

      <div className={styles['hero__price']}>
        <div className={styles['price__container']}>
          <span className={styles['price--thc']}>
            <img src="/png/ic_thc.png" />
            {MOCK_DATA.thcPrice.toLocaleString()} THC
          </span>
          ≈
          <span className={styles['price--usd']}>
            {MOCK_DATA.usdPrice.toLocaleString()} USD
          </span>
        </div>
        <div className={styles['price__purchase']}>Purchase</div>
      </div>
    </div>
  );
};

export default HeroDetail;
