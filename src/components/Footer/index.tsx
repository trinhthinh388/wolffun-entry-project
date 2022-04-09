import React from 'react';
import { mergeClassname } from '../../utils';

// Components
import Button from '../Button';

// Styles
import styles from './styles/footer.module.scss';

export type FooterProps = Record<string, any>;

const MENU_LIST = [
  [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'Thetan Arena', href: '/' },
    { id: 3, title: 'Blog', href: '/' },
    { id: 4, title: 'FAQ', href: '/' },
  ],
  [
    { id: 5, title: 'Instruction', href: '/' },
    { id: 6, title: 'Contact us', href: '/' },
    { id: 7, title: 'Support', href: '/' },
  ],
  [
    { id: 8, title: 'About Wolffun', href: '/' },
    { id: 9, title: 'Policy', href: '/' },
    { id: 10, title: 'Whitepaper', href: '/' },
    { id: 11, title: 'Audit report', href: '/' },
  ],
];

const SOCIAL_BTNS = [
  {
    id: 1,
    title: 'facebook',
    icon: '/png/ic_facebook_V2.png',
  },
  {
    id: 2,
    title: 'twitter',
    icon: '/png/ic_twitter_V2.png',
  },
  {
    id: 3,
    title: 'discord',
    icon: '/png/ic_discord_V2.png',
  },
  {
    id: 4,
    title: 'telegram',
    icon: '/png/ic_telegram_V2.png',
  },
];

const Footer: React.FC<FooterProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <footer
      className={mergeClassname(
        styles.footer,
        'grid grid-rows-3 lg:grid-rows-2',
        className
      )}
      {...props}
    >
      <div className={styles['footer__logo']}>
        <div className={styles['logo__container']}>
          <img alt="Thetan full logo" src="/png/thetan_logo_full_V2.png" />
        </div>
        <span className={styles['logo__desc']}>
          2022© Wolffun Game. All rights reserved.
        </span>
      </div>

      <div className={styles['footer__menu']}>
        {MENU_LIST.map((list, index) => (
          <ul key={index} className={styles['menu__list']}>
            {list.map(menu => (
              <li key={menu.id} className={styles['menu__item']}>
                {menu.title}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className={styles['footer__social']}>
        <div className={styles['social__title']}>Join our Community</div>
        <div className={styles['social__buttons']}>
          {SOCIAL_BTNS.map(btn => (
            <Button
              key={btn.id}
              icon={<img alt="social icon button" src={btn.icon} />}
              className={styles['social__button']}
            />
          ))}
        </div>
      </div>

      <div
        className={mergeClassname(
          styles['footer__support'],
          'flex justify-center lg:col-span-3'
        )}
      >
        <div className={styles['support__section']}>
          <div className={styles['support__title']}>Partnership Inquiry:</div>
          <div className={styles['support__content']}>
            Community/Business Partnership :<a href="/">Email Us</a>|
            <a href="/">Sign Up</a>
          </div>
          <div className={styles['support__content']}>
            Gaming Guild Application : <a href="/">Email Us</a>|
            <a href="/">Sign Up</a>
          </div>
          <div className={styles['support__content']}>
            Creator Program : <a href="/">Email Us</a>|<a href="/">Sign Up</a>
          </div>
        </div>

        <div className={styles['support__section']}>
          <div className={styles['support__title']}>Game Support Inquiry:</div>
          <div
            className={mergeClassname(
              styles['support__content'],
              'flex',
              'flex-row'
            )}
          >
            <img
              className={styles['support__logo']}
              alt="support icon"
              src="/png/ic_support_V2.png"
            />
            <a href="/">Wolffun Helpshift</a>
          </div>
          <div
            className={mergeClassname(
              styles['support__content'],
              'flex',
              'flex-row'
            )}
          >
            <img
              className={styles['support__logo']}
              alt="support icon"
              src="/png/ic_support_V2.png"
            />
            <a href="/">Discord - Game Support Channel</a>
          </div>
          <div
            className={mergeClassname(
              styles['support__content'],
              'flex',
              'flex-row'
            )}
          >
            <img
              className={styles['support__logo']}
              alt="support icon"
              src="/png/ic_support_V2.png"
            />
            <a href="/">Discord - Marketplace Support Channel</a>
          </div>
          <div
            className={mergeClassname(
              styles['support__content'],
              'flex',
              'flex-row'
            )}
          >
            <img
              className={styles['support__logo']}
              alt="support icon"
              src="/png/ic_email_V2.png"
            />
            <a href="/">Email Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
