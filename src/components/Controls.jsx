export default function Controls({ isPlaying, onPlayPause}) {
    return(
        <div className="flex justify-center items-center gap-4 mb-4">
            <button>⏮</button>
            <button className="text-2xl" onClick={onPlayPause}>
                {isPlaying ? '⏸' : '▶️' }
            </button>
            <button>⏭</button>
        </div>
    );
}