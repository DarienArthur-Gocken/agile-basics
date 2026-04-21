export default function ArtistCard(props) {
    return (
        <article className="artist-entry">
            <div className="artist-info">
                <h2 className="artist-name">{props.name}</h2>
                <p className="artist-genre">{props.genre}</p>
            </div>
            <div className="artist-bio">
                <p className="artist-bio-content">{props.bio}</p>
            </div>
            <div className="artist-albums">
                <p className="artist-album-title">{props.albumName}</p>
                <p className="artist-ablum-year">{props.albumYear}</p>
            </div>
        </article>
    )
}