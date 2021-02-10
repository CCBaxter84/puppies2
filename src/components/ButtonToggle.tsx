import { FC, ReactElement } from 'react';
import './ButtonToggle.css';

interface IProps {
  toggleForm: () => void;
};

const ButtonToggle:FC<IProps> = ({ toggleForm, children }): ReactElement => {
  return (
    <button className='dog-btn btn' onClick={() => toggleForm()}>
      {children}
    </button>
  );
};

export default ButtonToggle;