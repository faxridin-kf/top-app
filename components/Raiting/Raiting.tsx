import { Raitingprops } from './Raiting.props';
import styles from './Raiting.module.css';
import cn from 'classnames';
import React, { KeyboardEvent, useEffect, useState } from 'react';

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
        <span
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(raiting)}
          onClick={() => onClick(i + 1)}>
          <img
            src="./Star.svg"
            alt="raiting"
            className={cn(styles.star, {
              [styles.fill]: i < currentraiting,
              [styles.edtable]: isEditible,
            })}
            tabIndex={isEditible ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditible && handleSpace(i + 1, e)}
          />
        </span>
      );
    });
    setRaitingArr(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditible) {
      return;
    }
    constractraiting(i);
  };

  const onClick = (i: number) => {
    if (!isEditible || !setraiting) {
      return;
    }
    setraiting(i);
  };
  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setraiting) {
      return;
    }
    setraiting(i);
  };

  return (
    <div {...props}>
      {raitingArr.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
