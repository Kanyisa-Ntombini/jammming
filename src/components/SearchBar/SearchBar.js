import { useState } from 'react';
import './SearchBar.css';
import SearchResults from '../SearchResults/SearchResults.js';
import filterSongData from '../../spotifyApi/spotify_api.js';

function SearchBar() {
  const [hasReceivedData, setHasReceivedData] = useState(false);
  const [songTracks, setSongTracks] = useState([]);

  const handleClick = () => {
    let searchSong = document.getElementById('searchSong');
    searchSong = searchSong.value || '';
    const songs = filterSongData(searchSong);

    if (songs && searchSong) {
      setHasReceivedData(true);
      setSongTracks(songs);
    }
  };

  return (
    <section className="SearchBar">
      <input
        id="searchSong"
        type="text"
        placeholder="Please enter a song title..."
      />
      <button onClick={handleClick}>Search</button>
      {hasReceivedData && <SearchResults songTracks={songTracks} />}
    </section>
  );
}

export default SearchBar;
