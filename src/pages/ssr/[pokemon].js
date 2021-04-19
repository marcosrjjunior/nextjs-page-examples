import Head from "next/head";
import Link from "next/link";
import fetcher, { getURL } from "libs/fetcher";

import useSWR from "swr";

import Help from "components/Help";

import PokemonDetails from "components/PokemonDetails";
import PokemonContextProvider from "contexts/PokemonContext";
import PageTitle from "components/PageTitle";
import usePokemon from "libs/usePokemon";

import s from "assets/pokemon.module.css";

export default function PokemonSSR({ pokemon, initialData }) {
  const { data } = usePokemon(pokemon, initialData);

  return (
    <div>
      <Head>
        <title>Server side rendering</title>
      </Head>
      <PageTitle>Server side rendering</PageTitle>

      {data && (
        <PokemonContextProvider pokemon={data}>
          <div className={s.items}>
            <PokemonDetails />
            <PokemonDetails />
            <PokemonDetails />
          </div>
        </PokemonContextProvider>
      )}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const data = await fetcher({ url: getURL(query.pokemon) });

  return {
    props: {
      initialData: data,
      pokemon: query.pokemon,
    },
  };
}
