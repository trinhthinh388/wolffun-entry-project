import React from 'react';
import { Link } from 'react-router-dom';
import { mergeClassname } from '../../utils';
// APIs
import { HeroInfo } from '../../api/hero.api';

// Styles
import styles from './styles/hero.module.scss';

export type HeroCardProps = {
  data: HeroInfo;
};

const HeroCard: React.FC<
  HeroCardProps & React.HTMLAttributes<HTMLDivElement>
> = ({ data, className, ...props }) => {
  return (
    <Link to={`/hero?id=${data.id}`}>
      <div className={mergeClassname(styles['card'], className)} {...props}>
        <div className={styles['card__background']} />
        <div className={styles['card__image']}>
          <img alt="hero image" src={data.hero.imageURL} />
        </div>
        <div
          className={mergeClassname(
            styles['card__info'],
            styles['card__info--' + data.hero.rarity]
          )}
        >
          <div className={styles['info__hero']}>
            <div
              className={mergeClassname(
                styles['info__container'],
                styles['info__container--' + data.hero.rarity]
              )}
            >
              <div className={styles['hero__title']}>{data.hero.title}</div>
              <div className={styles['hero__name']}>{data.hero.name}</div>
            </div>
          </div>
          <div className={styles['info__price']}>
            <div className={styles['info__battle']}>
              <span className={styles['battle__title']}>gTHC battle</span>
              <span className={styles['battle__count']}>0/223</span>
            </div>
            <div className={styles['price--thg']}>
              <span className="price__title">Price</span>
              <span className={styles['price__amount']}>
                <span className={styles['price__icon']}>
                  <img src="/png/ic_thc.png" />
                </span>
                {data.thcPrice.toLocaleString()} THC
              </span>
            </div>
            <div className={styles['price--usd']}>
              <span>$ {data.usdPrice.toLocaleString()} USD</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
