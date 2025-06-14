// src/components/ProgressBar.jsx
export default function ProgressBar({
  currentTime,
  duration,
  onSeek,
}) {
  // formata mm:ss
  const format = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="my-4">
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(e) => onSeek(parseFloat(e.target.value))}
        className="w-full accent-green-500"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{format(currentTime)}</span>
        <span>{format(duration)}</span>
      </div>
    </div>
  );
}
