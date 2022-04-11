import React, { useState, useEffect, useRef, useCallback } from 'react';
import useMeasure from 'react-use-measure';
import { find } from 'lodash';
import { mergeClassname } from '../../utils';

// Components
import MenuPane from './components/MenuPane';

// Styles
import styles from './styles/select.module.scss';

// Images
import Arrow from '../../../public/svg/ic_arrow_down_fill.svg';

const changeEvent = new Event('change');

export type SelectProps = {
  options?: Array<{ id: string | number; title: string }>;
};

const Select: React.FC<
  SelectProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({ options = [], className, onChange = () => {}, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectRef, { width, height, top, left }] = useMeasure();
  const [open, setOpen] = useState<boolean>(false);

  const onItemClick = useCallback(
    (id: number | string) => () => {
      if (!inputRef.current) return;
      const currItem = find(options, { id });
      inputRef.current.value = currItem?.title ?? '';
      inputRef.current.dispatchEvent(changeEvent);
      setOpen(false);
    },
    [options]
  );

  useEffect(() => {
    if (!inputRef.current) return;
    const inputEl = inputRef.current;
    const callback = (ev: Event) => {
      onChange(ev as unknown as React.ChangeEvent<HTMLInputElement>);
    };
    inputEl.addEventListener('change', callback);
    // eslint-disable-next-line consistent-return
    return () => {
      inputEl.removeEventListener('change', callback);
    };
  }, [onChange]);

  return (
    <div
      ref={selectRef}
      onClick={e => {
        e.preventDefault();
        const { target, currentTarget } = e;
        if (target === currentTarget) setOpen(prev => !prev);
      }}
      className={mergeClassname(styles.select, className)}
    >
      <input
        ref={inputRef}
        className={styles['select__value']}
        type="text"
        {...props}
      />
      <div className={styles['select__icon']}>
        <Arrow />
      </div>

      <MenuPane
        style={{ width, top: top + height, left }}
        show={open}
        className={styles['select__options']}
      >
        {options.map(option => (
          <div
            onClick={onItemClick(option.id)}
            key={option.id}
            className={styles['options__container']}
          >
            <div className={styles['options__title']}>{option.title}</div>
          </div>
        ))}
      </MenuPane>
    </div>
  );
};

export default Select;
