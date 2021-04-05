import Head from "next/head";
import { useRouter } from "next/router";

import PokemonClientSide from "components/PokemonClientSide";
import PageTitle from "components/PageTitle";

const PokemonSimple = () => {
  const { query } = useRouter();

  const pokemon = query.pokemon;

  if (!pokemon) return "Loading...";

  return (
    <>
      <Head>
        <title>Client side rendering "just-react"</title>
      </Head>

      <PageTitle>Client side rendering ("just-react")</PageTitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        <PokemonClientSide pokemon={pokemon} />
        <PokemonClientSide pokemon={pokemon} />
        <PokemonClientSide pokemon={pokemon} />
      </div>
    </>
  );
};

export default PokemonSimple;
