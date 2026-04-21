import './Main.css'

export default function Main({ data }) {
    return (
        <main className="record-class">
            <h1 className="record-title">
                {data.label}
            </h1>

            <p className="record-description">
                Founded in {data.founded} and currently based in {data.city}, {data.label} is a record label dedicated to it's artists and pushes to let them pursue their passions.
            </p>

            <p className="record-tagline">
                {data.tagline}
            </p>
        </main>
    )
}