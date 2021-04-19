import Head from "next/head";
import { useRouter } from "next/router";

import useSWR from "swr";

import Help from "components/Help";

import PokemonClientSide from "components/PokemonClientSide";
import PokemonDetails from "components/PokemonDetails";
import PokemonContextProvider from "contexts/PokemonContext";
import PageTitle from "components/PageTitle";
import usePokemon from "libs/usePokemon";
import fetcher, { getURL } from "libs/fetcher";

import s from "assets/pokemon.module.css";

export default function PokemonSSGClient({ pokemon, initialData }) {
  const { data } = usePokemon(pokemon, initialData);

  const { isFallback } = useRouter();
  if (isFallback) return <span>Loading...</span>;

  return (
    <div>
      <Head>
        <title>Static rendering + client-side</title>
      </Head>
      <PageTitle>Static rendering + client-side</PageTitle>

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
      loadXpClientSide: true,
    },
  };
}
