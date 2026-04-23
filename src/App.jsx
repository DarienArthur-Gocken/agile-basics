import { useEffect } from 'react'
import data from './data.json'
import ArtistList from './components/ArtistList.jsx';
import ArtistCard from './components/ArtistCard.jsx';
import Main from './components/Main.jsx'
import './App.css'
import BackToTop from './components/BackToTop.jsx';

function App() {
  useEffect(() => {
    document.title = data.label
  }, [])

  console.log(data);
  
  return (
    <>
    <Main data = {data} />
    <ArtistList artists = {data.artists} />
    <BackToTop />
    </>
  )
}

export default App
