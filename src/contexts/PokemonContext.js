import { createContext, useState, useContext } from "react";
const initialState = { pokemon: undefined };

export const PokemonContext = createContext(initialState);

const PokemonContextProvider = ({ pokemon, children }) => {
  //   const [data] = useState(pokemon);

  return (
    <PokemonContext.Provider value={{ pokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonContext = () => useContext(PokemonContext);

export { usePokemonContext };
export default PokemonContextProvider;
