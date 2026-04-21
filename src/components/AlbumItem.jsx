export default function AlbumItem({props}) {
    return (
        <div className="artist-albums">
            <p className="artist-album-title">{props.albumName}</p>
            <p className="artist-ablum-year">{props.albumYear}</p>
        </div>
    )
}