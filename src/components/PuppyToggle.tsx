import { FC, ReactElement } from 'react';
import './PuppyCollage.css';

interface IProps {
  currentIndex: number;
};

const PuppyToggle: FC<IProps> = ({ currentIndex, children}): ReactElement | null => {
  if (Array.isArray(children)) {
    return (
      <>{children[currentIndex]}</>
    );
  } else {
    return null;
  }
};

export default PuppyToggle;