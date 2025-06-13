import { useState } from 'react';
import TrackInfo from './TrackInfo';
import Controls from './Controls';

export default function Player() {
  // ▶️ PLAY / PAUSE
  const [isPlaying, setIsPlaying] = useState(false);

  // 🎵 LISTA DE FAIXAS
  const tracks = [
    {
      title: 'Heranca',
      artist: 'Alee',
      cover: '',
    },
    {
      title: 'Estresse',
      artist: 'Alee',
      cover: '',
    },
    {
      title: 'Passado de um Vilao',
      artist: 'Alee',
      cover: '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracks[currentIndex];

  // Play / Pause
  const togglePlayPause = () => setIsPlaying(p => !p);

  // Próxima faixa
  const nextTrack = () =>
    setCurrentIndex(i => (i + 1) % tracks.length);

  // Faixa anterior
  const prevTrack = () =>
    setCurrentIndex(i => (i - 1 + tracks.length) % tracks.length);

  return (
    <div className="bg-gray-800 rounded-xl p-6 w-80 text-center shadow-lg">
      {/* Informações da faixa atual */}
      <TrackInfo track={currentTrack} />

      {/* Botões de controle */}
      <Controls
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onNext={nextTrack}
        onPrev={prevTrack}
      />

      {/* Barra de progresso (ainda estática) */}
      <div className="w-full h-2 bg-gray-700 rounded">
        <div className="h-2 bg-green-500 rounded w-1/4"></div>
      </div>
    </div>
  );
}
