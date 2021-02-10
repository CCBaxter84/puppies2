import { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  currentIndex: number;
};

const PuppyToggle: FC<IProps> = ({ currentIndex, children}): ReactElement | null => {
  if (Array.isArray(children)) {
    return (
      <section>{children[currentIndex]}</section>
    );
  } else {
    return null;
  }
};

export default PuppyToggle;