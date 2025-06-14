export default function TrackInfo({ track }) {
  return (
    <>
      <img
        src={track.cover}
        alt={`Capa de ${track.title}`}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{track.title}</h2>
        <p className="text-sm text-gray-400">{track.artist}</p>
      </div>
    </>
  );
}
