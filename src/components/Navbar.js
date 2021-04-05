import Link from "next/link";
import { useRouter } from "next/router";

import usePokemon from "libs/usePokemon";
import Help from "./Help";

const XP = ({ xp }) => (
  <li style={s.lastItem}>
    XP&nbsp;
    <span>{xp || 0}</span>
  </li>
);

const XPClientSide = ({ pokemon }) => {
  const { data } = usePokemon(pokemon);
  const xp = data?.base_experience || 0;

  return (
    <li style={s.lastItem}>
      XP&nbsp;
      <span>{xp}</span>
      <Help>(client-side)</Help>
    </li>
  );
};

const Navbar = ({ initialData, pokemon, loadXpClientSide }) => {
  const router = useRouter();

  // Some conditions were added just to create some scenarios
  const shouldDisplayXp =
    router.pathname !== "/" && router.pathname.indexOf("simple") === -1;

  return (
    <ul style={s.items}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      {shouldDisplayXp && (
        <>
          {loadXpClientSide ? (
            <XPClientSide pokemon={pokemon} />
          ) : (
            <XP xp={initialData?.base_experience} />
          )}
        </>
      )}
    </ul>
  );
};

// simple easy styles here : ) use Component.module.scss instead
const s = {
  navbar: { borderBottom: "1px solid #ccc" },
  items: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "10px",
    listStyle: "none",
    paddingLeft: 0,
  },
  lastItem: { display: "flex" },
};

export default Navbar;
