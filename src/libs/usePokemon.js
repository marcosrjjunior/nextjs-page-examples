import useSWR from "swr";
import { getURL } from "libs/fetcher";

function usePokemon(pokemon, initialData) {
  const { data, error } = useSWR(pokemon ? getURL(pokemon) : null, {
    initialData,
  });

  return {
    data,
    isLoading: !error && !data,
    error,
  };
}

export default usePokemon;
