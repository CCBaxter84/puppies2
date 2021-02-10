import { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  toggleForm: () => void;
  children: ReactNode;
};

const ButtonToggle:FC<IProps> = (props:IProps): ReactElement => {
  const { toggleForm, children } = props;

  return (
    <button onClick={() => toggleForm()}>
      {children}
    </button>
  );
};

export default ButtonToggle;