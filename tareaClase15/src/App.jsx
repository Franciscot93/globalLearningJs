import {useState} from "react";
import Header from "./components/Header"
import CallerApis from "./components/CallerApis"
import ContainerList from "./components/ContainerList"
import ModeContext from "./context/modeContext"




function App() {
const[backgroundColor,setBackgroundColor]=useState('bg-slate-100 h-screen overflow-hidden')
const[showPokemons,setShowPokemons]=useState(false)
  return (
    <ModeContext.Provider value={{backgroundColor,setBackgroundColor}}>
   <div className={`${ backgroundColor || 'bg-slate-100 h-screen overflow-hidden'}`}>
   <Header/>
   <div className="mt-12 md:flex">
    <CallerApis showPokemons={showPokemons}
    setShowPokemons={setShowPokemons}/>
    <ContainerList showPokemons={showPokemons}
    setShowPokemons={setShowPokemons}/>
   </div>
   </div>
   </ModeContext.Provider>
  )
}

export default App
