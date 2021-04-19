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
    <ul className="items">
      <li>
        <Link href="/">
          <a className="home">Home</a>
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

      <style jsx>{`
        .items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 10px;
          list-style: none;
          padding-left: 0;
          margin: 1.5rem 0px;
        }

        .home {
          padding: 0.5rem;
          background: #9bb2be;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          border: 1px solid transparent;
        }

        .home:hover {
          background: #899ca7;
        }

        .home:active {
          border: 1px solid #4c6370;
        }
      `}</style>
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
