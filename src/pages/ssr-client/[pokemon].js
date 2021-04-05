import Head from "next/head";

import useSWR from "swr";

import PokemonClientSide from "components/PokemonClientSide";
import PokemonDetails from "components/PokemonDetails";
import PokemonContextProvider from "contexts/PokemonContext";
import PageTitle from "components/PageTitle";
import Help from "components/Help";
import usePokemon from "libs/usePokemon";
import fetcher, { getURL } from "libs/fetcher";

import s from "assets/pokemon.module.css";

export default function PokemonSSRClient({ pokemon, initialData }) {
  const { data } = usePokemon(pokemon, initialData);

  return (
    <div>
      <Head>
        <title>Server side rendering + client-side</title>
        <meta
          name="description"
          content="Server side rendering + client-side"
        />
      </Head>
      <PageTitle>Server side rendering + client-side</PageTitle>

      {data && (
        <PokemonContextProvider pokemon={data}>
          <div className={s.items}>
            <PokemonDetails />
            <PokemonDetails />
            <PokemonDetails />
          </div>
        </PokemonContextProvider>
      )}

      <div style={{ marginTop: "1rem" }}>
        <Help>Fetching data client-side &#8628;</Help>

        <div className={s.items}>
          <PokemonClientSide pokemon={pokemon} />
          <PokemonClientSide pokemon={pokemon} />
          <PokemonClientSide pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const data = await fetcher({ url: getURL(query.pokemon) });

  return {
    props: {
      initialData: data,
      pokemon: query.pokemon,
      loadXpClientSide: true,
    },
  };
}
