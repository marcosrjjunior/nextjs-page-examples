import axios from "axios";

export const getURL = (pokemon) =>
  `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

async function fetcher(args) {
  const res = await axios(args);
  return res.data;
}

export default fetcher;
