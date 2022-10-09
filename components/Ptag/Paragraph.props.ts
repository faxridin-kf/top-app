import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface Paragraphprops
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  size?: 's' | 'm' | 'lg';
}
