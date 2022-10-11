import { Layoutprops } from './Layout.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import React from 'react';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';
import { Footer } from './footer/Footer';

export const Layout = ({ children }: Layoutprops): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
