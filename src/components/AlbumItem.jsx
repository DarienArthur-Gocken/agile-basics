export default function AlbumItem({props}) {
    return (
        <div className="artist-albums">
            <p className="artist-album-title">{props.title}</p>
            <p className="artist-ablum-year">{props.year}</p>
        </div>
    )
}