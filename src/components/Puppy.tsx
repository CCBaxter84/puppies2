import { FC, ReactElement, memo } from 'react';
import './PuppyCollage.css';

interface IPhoto {
  name: string;
  size: string;
}

interface IProps {
  name: string;
  photos: IPhoto[];
}

const Puppy: FC<IProps> = ({ name, photos }): ReactElement => {
  return (
    <>
      {photos.map(photo => (
        <article className={photo.size}>
          <img className="puppy-photo" src={photo.name}/>
        </article>
      ))}
    </>
  );
};

export default memo(Puppy);