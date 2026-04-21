import AlbumItem from "./AlbumItem";

export default function ArtistCard({props}) {
    return (
        <article className="artist-entry">
            <div className="artist-info">
                <h2 className="artist-name">{props.name}</h2>
                <p className="artist-genre">{props.genre}</p>
            </div>
            <div className="artist-bio">
                <p className="artist-bio-content">{props.bio}</p>
            </div>
        {props.map((props) => (
            <AlbumItem key = {props.name} props = {props} />
        ))}
        </article>
    )
}