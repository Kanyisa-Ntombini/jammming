import './TrackList.css';
import Track from '../Track/Track.js';

function TrackList({ songTracks }) {
  const allTracks = songTracks.map((songObj, index) => {
    return (
      <Track
        key={index}
        artistName={songObj.artistName}
        songName={songObj.songName}
        album={songObj.album}
      />
    );
  });
  return (
    <section className="TrackList">
      <h3>TrackList</h3>
      <div>{allTracks}</div>
    </section>
  );
}

export default TrackList;
