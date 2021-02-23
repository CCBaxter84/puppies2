import { FC, ReactElement, memo } from 'react';
import './PuppyCollage.css';
import PupRevan from '../pictures/Pup-Revan.jpg';
import PuppyRevan from '../pictures/Puppy-Revan.jpg';
import QuigleyRevan from '../pictures/Quigley-Revan.jpg';
import HomerRevan from '../pictures/HomerRevan.jpg';
import HomerRevan2 from '../pictures/HomerRevan2.jpg';
import RevanPic from '../pictures/Revan.jpg';
import RevanQuigley from '../pictures/Revan-Quigley.jpg';

const Revan: FC = (): ReactElement => {
  return (
    <>
      <article className='vertical'>
        <img className='puppy-photo big' src={HomerRevan} alt="smiling white shichon puppy"/>
      </article>
      <article className='big'>
        <img className='puppy-photo' src={RevanPic}/>
      </article>
      <article className='horizontal'>
        <img className='puppy-photo' src={QuigleyRevan} alt="painting of white shichon puppy dressed as medieval queen"/>
      </article>
      <article className='vertical'>
        <img className='puppy-photo' src={HomerRevan2} alt="white shichon puppy"/>
      </article>
      <article className='vertical'>
        <img className='puppy-photo' src={RevanQuigley} alt="white shichon puppy on blanket"/>
      </article>
      <article className='horizontal'>
        <img className='puppy-photo' src={PupRevan} alt="white shichon puppy"/>
      </article>
      <article className='horizontal'>
        <img className='puppy-photo' src={PuppyRevan} alt="white shichon puppy"/>
      </article>
    </>
  );
};

export default memo(Revan);