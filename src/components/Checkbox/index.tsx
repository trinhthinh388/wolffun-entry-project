import React from 'react';
import { mergeClassname } from '../../utils';

// Styles
import styles from './styles/checkbox.module.scss';

export type CheckboxProps = {
  title?: string;
};

const Checkbox: React.FC<
  CheckboxProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({ title, className, ...props }) => {
  return (
    <div className={styles.checkbox}>
      <input
        className={mergeClassname(styles['checkbox__input'], className)}
        {...props}
        type="checkbox"
      />
      <span className={styles['checkbox__checkmark']} />
      <span className={styles['checkbox__title']}>{title}</span>
    </div>
  );
};

export default Checkbox;
