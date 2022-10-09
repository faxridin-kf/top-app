import { Tagprops } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import React from 'react';

export const Tag = ({
  color = 'ghost',
  children,
  className,
  href,
  size = 'medium',
  ...props
}: Tagprops): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.ghost]: color == 'ghost',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
        [styles.red]: color == 'red',
      })}
      {...props}>
      {href ? <a href={href}> {children}</a> : <>{children}</>}
    </div>
  );
};
