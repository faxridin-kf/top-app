import { SideBarprops } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import React from 'react';

export const Sidebar = ({ ...props }: SideBarprops): JSX.Element => {
  return <div {...props}>sidebar</div>;
};
