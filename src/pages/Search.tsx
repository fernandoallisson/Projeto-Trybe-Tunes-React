import React, { useEffect, useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

interface Album {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: string;
  trackCount: number;
}

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [artistName, setArtistName] = useState('');

  const handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const response = await searchAlbumsAPI(searchTerm);
      setAlbums(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setArtistName(searchTerm);
      setSearchTerm('');
    }
  };

  useEffect(() => {
    if (albums.length > 0) {
      const artist = albums[0].artistName;
      setArtistName(artist);
    }
  }, [albums]);

  const isButtonDisabled = searchTerm.length < 2 || isLoading;

  return (
    <div>
      <input
        type="text"
        value={ searchTerm }
        onChange={ handleArtistNameChange }
        data-testid="search-artist-input"
      />
      <button
        type="button"
        onClick={ handleSearch }
        disabled={ isButtonDisabled }
        data-testid="search-artist-button"
      >
        Pesquisar
      </button>

      {isLoading && <p>Carregando...</p>}

      {albums.length > 0 && (
        <div>
          <p>
            Resultado de álbuns de:
            {' '}
            {artistName}
          </p>
          {albums.map((album) => (
            <a
              key={ album.collectionId }
              href={ `/album/${album.collectionId}` }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              {album.collectionName}
            </a>
          ))}
        </div>
      )}

      {albums.length === 0 && !isLoading && <p>Nenhum álbum foi encontrado</p>}
    </div>
  );
}

export default Search;
