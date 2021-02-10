import { FC, ReactElement } from 'react';
import './Header.css';

const Header: FC = (): ReactElement => {
  return (
    <header>
      <section className='title btn'>
        <h1>Select a Puppy!</h1>
      </section>
    </header>
  );
};

export default Header;

