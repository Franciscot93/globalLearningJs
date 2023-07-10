import  {useApiZustand } from "../store/useApiZustand";
import haunter from "../assets/haunter.gif"

const CallerApis = ({ showPokemons, setShowPokemons }) => {
  const { getPokemons } = useApiZustand();
  const handleCall = () => {getPokemons()}
   
  

  return (
    <div className=" text-center md:w-1/2 lg:w-2/5" >
      <h2 className="text-3xl text-teal-600 font-bold text-center mt-2 ">
        Clickea para ver contenido
      </h2>
      <button
        onClick={handleCall}
        className="mt-10 font-bold text-indigo-950 shadow-lg hover:bg-yellow-300 px-8 py-2 transition my-2 bg-indigo-300 rounded-md text-lg mx-1"
      >
       <img src={haunter} alt="" />
      </button>
      
    </div>
  );
};

export default CallerApis;
