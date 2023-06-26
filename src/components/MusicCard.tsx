import { useState } from 'react';
import { SongType } from '../types';
import imagemCheck from '../images/checked_heart.png';
import imagemUncheck from '../images/empty_heart.png';

function MusicCard({ trackName, previewUrl, trackId }: SongType) {
  const [checkado, setCheckado] = useState(false);

  const handleFavoriteCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckado(event.target.checked);
  };

  return (
    <div>
      <p>{trackName}</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        Seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
      <label
        htmlFor={ `check${trackId}` }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          type="checkbox"
          onChange={ handleFavoriteCheck }
          checked={ checkado }
          id={ `check${trackId}` }
          hidden
        />
        <img
          src={ checkado ? imagemCheck : imagemUncheck }
          alt="favorite"
        />
      </label>
    </div>
  );
}

export default MusicCard;
