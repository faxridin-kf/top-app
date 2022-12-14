import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
// import ArrowIcon from './arrow.svg';
export const Button = ({
  apperance,
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: apperance == 'primary',
        [styles.ghost]: apperance == 'ghost',
      })}
      {...props}>
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, className, {
            [styles.down]: arrow == 'down',
            [styles.right]: arrow == 'right',
          })}>
          <img className='primaryArrow' src="/arrow.svg" alt="" />
        </span>
      )}
    </button>
  );
};
