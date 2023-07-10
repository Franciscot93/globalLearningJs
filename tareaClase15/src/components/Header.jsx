import {useContext} from 'react'
import ModeContext from '../context/modeContext'


const Header = () => {
  const {backgroundColor,setBackgroundColor}=useContext(ModeContext)
  
  const darkMode='bg-gray-900 h-screen'
  const handleMode=()=>{

    if(backgroundColor!==darkMode | backgroundColor==='bg-slate-100 h-screen'){
      setBackgroundColor(darkMode)     
      }
      if(backgroundColor===darkMode){
        setBackgroundColor('bg-slate-100 h-screen')
      }
    }
    
  
  
  return (
    <div className="text-center  ">
      <button onClick={handleMode} className= "shadow-lg hover:bg-indigo-950 my-5 px-3 py-2 transition bg-indigo-300 rounded-md text-lg">{backgroundColor==='bg-slate-100 h-screen'?'🌛':'🌞'}</button>
    </div>
  )
}

export default Header
