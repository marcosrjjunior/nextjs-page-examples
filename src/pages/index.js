import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const pageModes = [
  {
    value: "ssg",
    label: "Static rendering",
  },
  {
    value: "ssg-client",
    label: "Static rendering + client-side",
  },
  {
    value: "ssr",
    label: "Server-side rendering",
  },
  {
    value: "ssr-client",
    label: "Server-side rendering + client-side",
  },
  {
    value: "simple",
    label: 'Client side "just-react"',
  },
];

export default function Home() {
  const [pageMode, setPageMode] = useState("ssg");

  return (
    <>
      <Head>
        <title>Nextjs page examples</title>
      </Head>

      <div className="pageMode">
        <strong>Page mode</strong>
        <ul className="pageModeItems">
          {pageModes.map((mode) => (
            <li key={mode.value} className="pageModeItem">
              <input
                style={{ cursor: "pointer" }}
                type="radio"
                id={mode.value}
                value={mode.value}
                checked={mode.value === pageMode}
                name="pageMode"
                onChange={(e) => setPageMode(e.target.value)}
              />
              <label style={{ cursor: "pointer" }} htmlFor={mode.value}>
                {mode.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>Choose a Pokemon!</h1>

        <div className="pokemons">
          <Link href={`/${pageMode}/bulbasaur`}>
            <a title="Bulbasaur" className="pokemon">
              <Image
                src="/bulbasaur.png"
                alt="choose-bulbasaur"
                width="180"
                height="162"
              />
            </a>
          </Link>

          <Link href={`/${pageMode}/charmander`}>
            <a title="Charmander" className="pokemon">
              <Image
                src="/charmander.png"
                alt="choose-charmander"
                width="180"
                height="162"
              />
            </a>
          </Link>

          <Link href={`/${pageMode}/squirtle`}>
            <a title="squirtle" className="pokemon">
              <Image
                src="/squirtle.png"
                alt="choose-squirtle"
                width="180"
                height="162"
              />
            </a>
          </Link>
        </div>

        <style global jsx>{`
          .pageMode {
            padding: 1rem;
            background: #9bb2be;
            border-radius: 5px;
            color: white;
          }

          .pageModeItems {
            list-style: none;
            padding-left: 0;
          }

          .pageModeItem {
            margin-bottom: 0.2rem;
          }

          .pokemons {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }

          .pokemon {
            opacity: 0.7;
          }

          .pokemon:hover {
            background: #f2f2f2;
            border-radius: 5px;
            opacity: 1;
          }
        `}</style>
      </div>
    </>
  );
}
