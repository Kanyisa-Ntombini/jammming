import './Playlist.css';

function Playlist() {
  return (
    <section className="Playlist">
      <h3>Let's Create a Playlist!</h3>
      <input type="text" placeholder="Please enter playlist name" />
      <button>Save To Spotify</button>
    </section>
  );
}

export default Playlist;
