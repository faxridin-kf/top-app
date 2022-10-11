import { Layoutprops } from './Layout.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import React, { FunctionComponent } from 'react';
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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutCompoment(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};