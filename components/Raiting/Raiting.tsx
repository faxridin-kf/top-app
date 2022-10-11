import { Raitingprops } from './Raiting.props';
import styles from './Raiting.module.css';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';

export const Raiting = ({
  className,
  isEditible = false,
  raiting,
  setraiting,
  ...props
}: Raitingprops): JSX.Element => {
  const [raitingArr, setRaitingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constractraiting(raiting);
  }, [raiting]);

  const constractraiting = (currentraiting: number) => {
    const updatedArray = raitingArr.map((r: JSX.Element, i: number) => {
      return (
        <img
          src="./Star.svg"
          alt="raiting"
          className={cn(styles.star, {
            [styles.fill]: i < currentraiting,
          })}
        />
      );
    });
    setRaitingArr(updatedArray);
  };
  return (
    <div {...props}>
      {raitingArr.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
