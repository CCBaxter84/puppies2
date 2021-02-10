import { ReactNode, FC } from 'react';

export interface IPuppy {
  name: string;
  component: FC;
};

export interface IProps {
  options: IPuppy[];
};

