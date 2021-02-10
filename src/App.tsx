import { FC, ReactElement } from 'react';
import Nova from './components/Nova';
import Revan from './components/Revan';
import PuppyCollage from './components/PuppyCollage';
import { IPuppy } from './types';
import './App.css';

const App: FC = (): ReactElement => {
  let data: IPuppy[] = [
    { name: "Nova", component: Nova },
    { name: "Revan", component: Revan }
  ];

  return (
    <>
      <header className='title'>
        <h1>Select a Puppy!</h1>
      </header>
      <PuppyCollage options={data}/>
    </>
  );
};

export default App;
