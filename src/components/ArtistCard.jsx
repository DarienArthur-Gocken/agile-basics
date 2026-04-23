import AlbumItem from "./AlbumItem";
import './ArtistCard.css';

export default function ArtistCard({ props }) {
    return (
        <article className="artist-entry">
            <div className="artist-details">
                <div className="artist-info">
                    <h2 className="artist-name">{props.name}</h2>
                    <p className="artist-genre">{props.genre}</p>
                </div>
                <div className="artist-bio">
                    <p className="artist-bio-content">{props.bio}</p>
                </div>
            </div>
            <div className="artist-albums-container">
                <h3 className="albums-heading">Albums</h3>
                {props.albums && props.albums.map((album) => (
                    <AlbumItem key = {album.title} props = {album} />
                ))}
            </div>
        </article>
    )
}