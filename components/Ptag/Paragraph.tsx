import { Paragraphprops } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';
import React from 'react';

export const Paragraph = ({ children, size = 'm', ...props }: Paragraphprops): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size == 's',
        [styles.mesium]: size == 'm',
        [styles.large]: size == 'lg',
      })}
      {...props}>
      {children}
    </p>
  );
};
