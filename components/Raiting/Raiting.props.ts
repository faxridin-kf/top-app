import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface Raitingprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  // children: ReactNode;
  isEditible?: false | true;
  raiting: number;
  setraiting?: (raiting: number) => void;
}
