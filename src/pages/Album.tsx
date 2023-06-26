import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { SongType } from '../types';

function Album() {
  const [loading, setLoading] = useState(true);
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [musics, setMusics] = useState<SongType[]>([]);

  const { id } = useParams<{ id: string }>(); // Obtém o id do álbum da URL

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await getMusics(`${id}`);
        const [albumInfo, ...musicList] = response;

        setArtistName(albumInfo.artistName);
        setAlbumName(albumInfo.collectionName);
        setMusics(musicList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMusics();
  }, [id]);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      <p data-testid="artist-name">{artistName}</p>
      <p data-testid="album-name">{albumName}</p>
      {musics.map((music) => (
        <MusicCard
          trackId={ music.trackId }
          key={ music.trackId }
          trackName={ music.trackName }
          previewUrl={ music.previewUrl }
        />
      ))}
    </div>
  );
}

export default Album;
