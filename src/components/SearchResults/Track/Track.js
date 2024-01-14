import './Track.css';

function Track({ artistName, songName, album }) {
  return (
    <div className="Track">
      <div>{songName}</div>
      <div className="other">
        <div>{artistName}</div>
        <div style={{ fontWeight: 700 }}>|</div>
        <div>{album}</div>
      </div>
    </div>
  );
}

export default Track;
