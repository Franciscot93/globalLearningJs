import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {useConectionZustand} from '../store/conectionZustand'
import Error from "./components/error";


export default function Root (){
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const {conection,setConection}=useConectionZustand()
  const [error,setError]=useState(false)
  const [validUser, setValidUser]=useState(false)

  
   const handleSubmit=(e)=>{
    e.preventDefault()
    if(username!=='' && password!==''){
      const user={username:username,password:password}
      
      setConection(user, setValidUser,setError)
      setError(false)
      
      
    }
    if([username,password].includes('')){
      setError(true)
    }    
    
    
   }

   useEffect(()=>{
    if(validUser){
    
    setUsername('')
    setPassword('')

  
  }
    
   },[validUser])


  
 
    
   

  return (
    <div className="container mx-auto mt-20  ">
      <div className="mt-12 md:flex">
        <div className="md:w-1/2 lg:w-1/5 py-5 px-5 rounded-xl shadow-md shadow-red-950">
          <h2 className="font-black text-red-700 text-3xl text-center">Formulario</h2>

          <p className="text-lg mt-5 text-slate-200 text-center mb-10">
            Ingresa tus {""}
            <span className="text-red-600 font-bold">Datos</span>
          </p>

          {error ? (
          <Error mensaje={"Se registran errores, revisa los datos"} />
        ) : null}

          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-5">
              <label
                className="block text-gray-300 uppercase font-bold"
                htmlFor="nombreUsuario"
              >
                Usuario
              </label>
              <input
                id="nombreUsuario"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Ingresa tu Usuario"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                className="block text-gray-300 uppercase font-bold"
                htmlFor="passwordUser"
              >
                Password
              </label>
              <input
                id="passwordUser"
                type="password"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            
            < button onClick={(e)=>handleSubmit(e)} type="submit" className=" mt-5 mb-5 w-full py-3 bg-red-800 rounded-md text-center  text-gray-300 font-semibold hover:bg-indigo-700 hover:text-slate-200 cursor-pointer transition-colors duration-500" >Login</button>
          
          </form>
          
        </div>
        <div id="userPanel" className="md:w-1/2 lg:w-4/5 ml-5 py-5 px-5 rounded-xl shadow-md shadow-red-950">
            <Outlet/>

        </div>
      </div>
    </div>
  );
};


