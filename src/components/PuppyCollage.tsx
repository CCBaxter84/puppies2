import { FC, ReactElement, useState } from 'react';
import ButtonToggle from './ButtonToggle';
import PuppyToggle from './PuppyToggle';
import { IPuppy } from '../types';

interface IProps {
  options: IPuppy[];
};

const PuppyCollage: FC<IProps> = ({options}): ReactElement => {
  const [ currentForm, setCurrentForm ] = useState(0);

  return (
    <main>
      {options.map((el, index) => {
        return (
          <ButtonToggle toggleForm={() => setCurrentForm(index)}>{el.name}</ButtonToggle>
        );
      })}
      <PuppyToggle currentIndex={currentForm}></PuppyToggle>
    </main>
  );
}

export default PuppyCollage;