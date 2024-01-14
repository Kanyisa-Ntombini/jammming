import './SearchResults.css';
import TrackList from './TrackList/TrackList';
import Playlist from './Playlist/Playlist.js';

function SearchResults({ songTracks }) {
  return (
    <section className="SearchResults">
      <TrackList songTracks={songTracks} />
      <Playlist />
    </section>
  );
}

export default SearchResults;
