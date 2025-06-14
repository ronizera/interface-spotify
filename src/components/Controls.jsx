export default function Controls({ isPlaying, onPlayPause, onNext, onPrev}) {
    return(
        <div className="flex justify-center items-center gap-4 mb-4">
            <button onClick={onPrev}>⏮</button>
            <button className="text-2xl" onClick={onPlayPause}>
                {isPlaying ? '⏸' : '▶️' }
            </button>
            <button onClick={onNext}>⏭</button>
        </div>
    );
}