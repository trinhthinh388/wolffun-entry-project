import React from 'react';
import styles from './styles/button.module.scss';
import { mergeClassname } from '../../utils';

export type ButtonProps = {
  variants?: 'primary' | 'secondary';
  icon?: React.ReactNode;
};

const Button: React.FC<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ variants = 'primary', icon = null, children, className, ...props }) => {
  return (
    <button
      className={mergeClassname(
        styles.button,
        `${styles[`button--${variants}`]}`,
        !!icon && `${styles[`icon-btn`]}`,
        className
      )}
      {...props}
    >
      {!icon && children}
      {icon}
    </button>
  );
};

export default Button;
