import { FC, ReactElement, useState, createElement } from 'react';
import ButtonToggle from './ButtonToggle';
import PuppyToggle from './PuppyToggle';
import { IPuppy } from '../types';
import './PuppyCollage.css';

interface IProps {
  options: IPuppy[];
};

const PuppyCollage: FC<IProps> = ({options}): ReactElement => {
  const [ currentForm, setCurrentForm ] = useState(0);

  return (
    <main>
      <section className='controller-btns'>
        {options.map((el, index) => {
          return (
            <ButtonToggle key={`button${index}`} toggleForm={() => setCurrentForm(index)}>
              {el.name}
            </ButtonToggle>
          );
        })}
      </section>
      <PuppyToggle currentIndex={currentForm}>
        {options.map((el, index) => {
          return (
            <section key={`form${index}`}>
              {createElement(el.component)}
            </section>
          );
        })}
      </PuppyToggle>
    </main>
  );
}

export default PuppyCollage;