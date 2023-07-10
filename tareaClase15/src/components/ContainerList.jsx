import Card from "./Card";
import {useApiZustand} from "../store/useApiZustand";

const ContainerList = (showPokemons) => {
  const {pokemons} = useApiZustand((state) => state);
  console.log(pokemons)
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 ml-1 md:h-screen overflow-scroll">
        <h2 className="text-3xl text-teal-600 font-bold text-center mt-2 mb-10 ">
          Contenido de la api
        </h2>
        {showPokemons ? (
          <ul>
          {pokemons.map(pokemon=>(
              <li key={pokemon.id}><Card pokemon={pokemon}/></li>
            ))}
          </ul>
        ) : 'No has llamado a la api'}
      </div>
    </>
  );
};

export default ContainerList;
