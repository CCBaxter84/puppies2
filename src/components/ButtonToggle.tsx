import { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  toggleForm: () => void;
};

const ButtonToggle:FC<IProps> = ({ toggleForm, children }): ReactElement => {
  return (
    <button onClick={() => toggleForm()}>
      {children}
    </button>
  );
};

export default ButtonToggle;