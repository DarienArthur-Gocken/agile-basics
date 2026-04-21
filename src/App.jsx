import data from './data.json'
import ArtistList from './components/ArtistList.jsx';
import ArtistCard from './components/ArtistCard.jsx';
import Main from './components/Main.jsx'
import './App.css'

function App() {
  console.log(data);
  
  return (
    <>
    <Main data = {data} />
    <ArtistList artists = {data.artists} />
    </>
  )
}

export default App
