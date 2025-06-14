import { useEffect, useRef, useState } from "react";
import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function Player() {
  // 🎵 LISTA DE FAIXAS
  const tracks = [
    {
      title: "Tempo de Ouro",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Passado de Um Vilão",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "On",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Herança",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      title: "Disco de Platina",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Amor e Ódio",
      artist: "Alee ft. Senndy",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      title: "Alpinista Social",
      artist: "Alee ft. Klisman",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      title: "Carolina",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      title: "Party",
      artist: "Alee ft. Klisman & Anezzi",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      title: "Segredo",
      artist: "Alee ft. Brandão",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
      title: "Número da Sorte",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      title: "Última Vez",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
    {
      title: "Estresse",
      artist: "Alee",
      cover:
        "https://imgs.search.brave.com/BpoXoG-SkBNgRN5BwDcY0aiykiVscBtk5qv7OCx6fjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3Lzcx/LzgzL2Y3NzE4MzIx/YjU5MjU5NDhhNmJl/MTJmYjllYzI2YTY3/LmpwZw",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracks[currentIndex];
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentIndex((i) => (i + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentIndex((i) => (i - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => nextTrack();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => console.error(error));
        }
      }
    }
  }, [currentIndex]);

  return (
    <div className="bg-gray-800 rounded-xl p-6 w-80 text-center shadow-lg">
      <TrackInfo track={currentTrack} />

      <Controls
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onNext={nextTrack}
        onPrev={prevTrack}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={(t) => {
          audioRef.current.currentTime = t;
          setCurrentTime(t);
        }}
      />

      <audio ref={audioRef}>
        <source src={currentTrack.src} type="audio/mpeg" />
      </audio>
    </div>
  );
}
