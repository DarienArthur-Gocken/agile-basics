import data from './data.json'
import Main from './components/Main.jsx'
import './App.css'

function App() {
  console.log(data);
  
  return (
    <>
    <Main data = {data} />
    </>
  )
}

export default App
