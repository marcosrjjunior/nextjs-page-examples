import { usePokemonContext } from "contexts/PokemonContext";
import PokemonCard from "components/PokemonCard";

const PokemonDetails = () => {
  const { pokemon } = usePokemonContext();

  return <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetails;
