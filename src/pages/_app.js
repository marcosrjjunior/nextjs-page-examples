import useSWR, { SWRConfig } from "swr";
import fetcher from "libs/fetcher";
import Navbar from "components/Navbar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "1rem auto",
          fontFamily: "monospace",
        }}
      >
        <a
          href="https://github.com/marcosrjjunior/nextjs-page-examples"
          target="_blank"
        >
          <img
            style={{ position: "fixed", top: "10px", right: "10px" }}
            src="/GitHub-Mark-32px.png"
            alt="github-link"
          />
        </a>

        <Navbar {...pageProps} />

        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
};

export default MyApp;
