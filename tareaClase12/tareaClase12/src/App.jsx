import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  

  const [isLoading, setIsLoading] = useState(null);

  const handleClick=()=>setIsLoading(false)
  useEffect(() => {
    const fetchData = async () => {
      

      try {
        const peticion = await fetch(
          "https://jsonplaceholder.typicode.com/posts");
        const response = await peticion.json();
        setData(response);

        if (!response.ok) {
          console.log("Error al realizar la solicitud");
          
          return;
        }

        
        console.log(data)
      } catch (error) {
        console.log("Error al realizar la solicitud:", error.message);
        setError("Error al cargar los datos. Por favor, intenta nuevamente.");
      } finally {
        setTimeout(() => {
          setIsLoading(true);
        }, 5000);
      }
    };
    fetchData()
   
  }, [isLoading]);

  if (!isLoading) {
    return (
      <>
        <button onClick={handleClick}>Buscar</button>
        <button >Cancelar</button>
        <div>
          <h1>Publicaciones:</h1>
          <ul>
          <p>Cargando...</p>
          </ul>
        </div>

        
      </>
    );
  }
  if (error) {
    return (
      <>
        <button onClick={handleClick}>Buscar</button>
        <button >Cancelar</button>
        <p>{error}</p>
      </>
    );
  }
  if(isLoading && !error && isLoading!=null && isLoading!=false){
    return (
      <>
      
      <button onClick={handleClick}>Buscar</button>
        <button >Cancelar</button>
        <div>
          <h1>Publicaciones:</h1>
          <ul>
            {data.map(post=>(
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      </>
    )
  }
  

  return (
    <>
      
      <button onClick={handleClick}>Buscar</button>
        <button >Cancelar</button>
        <div>
          <h1>Publicaciones:</h1>
          <ul>
          
          </ul>
        </div>
     
    </>
  );
}

export default App;
