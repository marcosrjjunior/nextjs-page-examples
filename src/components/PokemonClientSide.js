import usePokemon from "libs/usePokemon";
import PokemonCard from "components/PokemonCard";

const PokemonClientSide = ({ pokemon }) => {
  const { data, isLoading, error } = usePokemon(pokemon);

  if (isLoading) return "";

  return <PokemonCard pokemon={data} />;
};

export default PokemonClientSide;
