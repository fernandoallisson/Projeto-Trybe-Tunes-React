interface MusicCardProps {
  trackName: string;
  previewUrl: string;
}
function MusicCard({ trackName, previewUrl }: MusicCardProps) {
  return (
    <div>
      <p>{trackName}</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        Seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
    </div>
  );
}

export default MusicCard;
