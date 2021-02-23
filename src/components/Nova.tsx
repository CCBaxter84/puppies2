import { FC, ReactElement, memo } from 'react';
import HappyNova from '../pictures/HappyNova.jpg';
import NovaBeanbag from '../pictures/Nova-Beanbag.jpg';
import QueenNova from '../pictures/Queen-Nova.jpg';
import NovaBlanket from '../pictures/Nova-Blanket.jpg';
import NovaPic from '../pictures/Nova.jpg';
import NovaThrone from '../pictures/NovaBeanbag.jpg';
import './PuppyCollage.css';

const Nova: FC = (): ReactElement => {
  return (
    <>
      <article className='big'>
        <img className='puppy-photo' src={HappyNova} alt="smiling white shichon puppy"/>
      </article>
      <article className='horizontal'>
        <img className='puppy-photo' src={NovaBeanbag}/>
      </article>
      <article className='vertical'>
        <img className='puppy-photo' src={QueenNova} alt="painting of white shichon puppy dressed as medieval queen"/>
      </article>
      <article className='horizontal'>
        <img className='puppy-photo' src={NovaBlanket} alt="white shichon puppy on blanket"/>
      </article>
      <article className='vertical'>
        <img className='puppy-photo' src={NovaPic} alt="white shichon puppy"/>
      </article>
      <article className='horizontal'>
        <img className='puppy-photo' src={NovaThrone} alt="white shichon puppy"/>
      </article>
    </>
  );
};

export default memo(Nova);