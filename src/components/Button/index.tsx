import React from 'react';
import styles from './styles/button.module.scss';
import { mergeClassname } from '../../utils';

export type ButtonProps = {
  variants?: 'primary' | 'secondary';
};

const Button: React.FC<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ variants = 'primary', className, ...props }) => {
  return (
    <button
      className={mergeClassname(
        styles.button,
        `${styles[`button--${variants}`]}`,
        className
      )}
      {...props}
    />
  );
};

export default Button;
