import { usePokemonContext } from "contexts/PokemonContext";

const PokemonCard = ({ pokemon }) => {
  return (
    <div style={s.card}>
      <h2>{pokemon.name}</h2>

      <img
        style={s.image}
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemon-image"
      />

      {/* <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p> */}

      <strong>Abilities</strong>
      <ul>
        {pokemon.abilities.map(({ ability }) => (
          <li key={ability.name}>{ability.name}</li>
        ))}
      </ul>

      <strong>Type</strong>
      <ul>
        {pokemon.types.map(({ type }) => (
          <li key={type.name}>{type.name}</li>
        ))}
      </ul>
    </div>
  );
};

const s = {
  card: {
    border: "1px solid #eee",
    borderRadius: "10px",
    boxShadow: `rgb(0 0 0 / 5%) 1px 1px 2px`,
    display: "grid",
    padding: "0.5rem",
    width: "200px",
  },
  image: {
    height: "130px",
    justifySelf: "center",
    padding: "1rem 0",
    width: "100%",
  },
};

export default PokemonCard;
