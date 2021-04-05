import Head from "next/head";
import { useRouter } from "next/router";

import useSWR from "swr";

import PokemonDetails from "components/PokemonDetails";
import PokemonContextProvider from "contexts/PokemonContext";
import PageTitle from "components/PageTitle";
import fetcher, { getURL } from "libs/fetcher";
import usePokemon from "libs/usePokemon";

import s from "assets/pokemon.module.css";

export default function PokemonSSG({ pokemon, initialData }) {
  const { data } = usePokemon(pokemon, initialData);
  const { isFallback } = useRouter();

  if (isFallback) return <span>Loading...</span>;

  return (
    <div>
      <Head>
        <title>Static rendering</title>
        <meta name="description" content="Static rendering" />
      </Head>

      <PageTitle>Static rendering</PageTitle>

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

export async function getStaticPaths() {
  const pokemons = ["charmander", "bulbasaur", "squirtle"];

  const paths = pokemons.map((pokemon) => {
    return {
      params: {
        pokemon,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const data = await fetcher({ url: getURL(context.params.pokemon) });

  return {
    props: {
      initialData: data,
      pokemon: context.params.pokemon,
    },
  };
}
