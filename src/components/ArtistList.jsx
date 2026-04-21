import ArtistCard from "./ArtistCard"

export default function ArtistList({ artists }) {
    return (
        <div className="artist-list">
            {artists.map((artist) => (
                <ArtistCard key = {artist.id} props = {artist} />
            ))}
        </div>
    )
}